from datetime import datetime, timezone

from database.db import db


class Enquiry(db.Model):
    __tablename__ = "enquiries"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(
        db.String(120),
        nullable=False,
    )

    phone = db.Column(
        db.String(20),
        nullable=False,
    )

    email = db.Column(
        db.String(160),
        nullable=False,
    )

    message = db.Column(
        db.Text,
        nullable=True,
    )

    source = db.Column(
        db.String(50),
        nullable=False,
        default="website",
    )

    email_sent = db.Column(
        db.Boolean,
        nullable=False,
        default=False,
    )

    created_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        default=lambda: datetime.now(timezone.utc),
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone": self.phone,
            "email": self.email,
            "message": self.message,
            "source": self.source,
            "email_sent": self.email_sent,
            "created_at": (
                self.created_at.isoformat()
                if self.created_at
                else None
            ),
        }
