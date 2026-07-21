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
        enquiry = create_enquiry(request_data)

        return (
            jsonify(
                {
                    "success": True,
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
