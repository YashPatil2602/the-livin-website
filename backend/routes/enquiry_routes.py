from flask import Blueprint, jsonify, request

from services.enquiry_service import create_enquiry


enquiry_blueprint = Blueprint(
    "enquiries",
    __name__,
)


@enquiry_blueprint.get("/health")
def health_check():
    return jsonify(
        {
            "success": True,
            "message": "The Livin backend is running.",
        }
    )


@enquiry_blueprint.post("/enquiries")
def submit_enquiry():
    request_data = request.get_json(silent=True) or {}

    try:
        enquiry, already_exists = create_enquiry(
            request_data
        )

        if already_exists:
            return (
                jsonify(
                    {
                        "success": True,
                        "already_exists": True,
                        "message": (
                            "You have already submitted an enquiry. "
                            "Our project advisor will contact you shortly."
                        ),
                        "enquiry_id": enquiry.id,
                        "email_sent": enquiry.email_sent,
                    }
                ),
                200,
            )

        return (
            jsonify(
                {
                    "success": True,
                    "already_exists": False,
                    "message": (
                        "Thank you. Our project advisor "
                        "will contact you shortly."
                    ),
                    "enquiry_id": enquiry.id,
                    "email_sent": enquiry.email_sent,
                }
            ),
            201,
        )

    except ValueError as error:
        return (
            jsonify(
                {
                    "success": False,
                    "message": str(error),
                }
            ),
            400,
        )

    except Exception:
        return (
            jsonify(
                {
                    "success": False,
                    "message": (
                        "We could not submit your enquiry. "
                        "Please try again."
                    ),
                }
            ),
            500,
        )
