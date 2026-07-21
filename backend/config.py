import os
from pathlib import Path

from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parent
INSTANCE_DIR = BASE_DIR / "instance"
DATABASE_FILE = INSTANCE_DIR / "enquiries.db"

load_dotenv(BASE_DIR / ".env")


def get_cors_origins():
    configured_origins = os.getenv(
        "CORS_ORIGINS",
        "http://localhost:5173,"
        "http://127.0.0.1:5173,"
        "http://54.252.184.101",
    )

    return [
        origin.strip()
        for origin in configured_origins.split(",")
        if origin.strip()
    ]


class Config:
    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "change-this-secret-key-in-production",
    )

    SQLALCHEMY_DATABASE_URI = (
        os.getenv("DATABASE_URL")
        or f"sqlite:///{DATABASE_FILE.as_posix()}"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    CORS_ORIGINS = get_cors_origins()

    EMAIL_HOST = os.getenv("EMAIL_HOST", "smtp.gmail.com")
    EMAIL_PORT = int(os.getenv("EMAIL_PORT", "587"))
    EMAIL_USE_TLS = (
        os.getenv("EMAIL_USE_TLS", "true").lower() == "true"
    )

    EMAIL_USER = os.getenv("EMAIL_USER", "")
    EMAIL_APP_PASSWORD = os.getenv("EMAIL_APP_PASSWORD", "")
    EMAIL_TO = os.getenv("EMAIL_TO", "")
