from pathlib import Path

from flask import Flask
from flask_cors import CORS

from config import Config
from database.db import db
from routes.enquiry_routes import enquiry_blueprint


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    Path(app.root_path, "instance").mkdir(
        parents=True,
        exist_ok=True,
    )

    db.init_app(app)

    CORS(
        app,
        resources={
            r"/api/*": {
                "origins": app.config["CORS_ORIGINS"],
            }
        },
    )

    app.register_blueprint(
        enquiry_blueprint,
        url_prefix="/api",
    )

    with app.app_context():
        db.create_all()

    return app


app = create_app()


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True,
    )
