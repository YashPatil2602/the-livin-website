import re
import smtplib
import ssl
from email.message import EmailMessage

from flask import current_app

from database.db import db
from models.enquiry_model import Enquiry


EMAIL_PATTERN = re.compile(
    r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
)


def clean_text(value):
    if value is None:
        return ""

    return str(value).strip()


def validate_enquiry(data):
    name = clean_text(data.get("name"))
    phone = clean_text(data.get("phone"))
    email = clean_text(data.get("email")).lower()
    message = clean_text(data.get("message"))
    source = clean_text(data.get("source")) or "website"

    if len(name) < 2:
        raise ValueError("Please enter a valid full name.")

    digits_only = re.sub(r"\D", "", phone)

    if len(digits_only) != 10:
        raise ValueError(
            "Please enter a valid 10-digit phone number."
        )

    if not EMAIL_PATTERN.match(email):
        raise ValueError(
            "Please enter a valid email address."
        )

    return {
        "name": name,
        "phone": digits_only,
        "email": email,
        "message": message,
        "source": source[:50],
    }


def send_notification_email(enquiry):
    email_user = current_app.config.get("EMAIL_USER")
    email_password = current_app.config.get(
        "EMAIL_APP_PASSWORD"
    )
    email_to = current_app.config.get("EMAIL_TO")

    if not email_user or not email_password or not email_to:
        current_app.logger.warning(
            "Email settings are missing. "
            "Enquiry saved without sending email."
        )
        return False

    email_password = email_password.replace(" ", "")

    message = EmailMessage()

    message["Subject"] = (
        f"New The Livin enquiry from {enquiry.name}"
    )
    message["From"] = email_user
    message["To"] = email_to
    message["Reply-To"] = enquiry.email

    message.set_content(
        "\n".join(
            [
                "A new enquiry was submitted.",
                "",
                f"Name: {enquiry.name}",
                f"Phone: {enquiry.phone}",
                f"Email: {enquiry.email}",
                f"Source: {enquiry.source}",
                "",
                "Message:",
                enquiry.message or "No message provided.",
                "",
                f"Enquiry ID: {enquiry.id}",
                f"Submitted at: {enquiry.created_at}",
            ]
        )
    )

    ssl_context = ssl.create_default_context()

    with smtplib.SMTP(
        current_app.config["EMAIL_HOST"],
        current_app.config["EMAIL_PORT"],
        timeout=20,
    ) as smtp_server:
        smtp_server.ehlo()

        if current_app.config["EMAIL_USE_TLS"]:
            smtp_server.starttls(context=ssl_context)
            smtp_server.ehlo()

        smtp_server.login(
            email_user,
            email_password,
        )

        smtp_server.send_message(message)

    return True


def create_enquiry(data):
    validated_data = validate_enquiry(data)

    enquiry = Enquiry(**validated_data)

    db.session.add(enquiry)
    db.session.commit()

    try:
        enquiry.email_sent = send_notification_email(enquiry)
    except Exception:
        current_app.logger.exception(
            "Enquiry saved, but email sending failed."
        )
        enquiry.email_sent = False

    db.session.commit()

    return enquiry
