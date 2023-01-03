from passlib.context import CryptContext
from sqlalchemy.orm import Session
from app.database import models, schemas

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def create_user(db: Session, user_create: schemas.UserCreate):
    db_user = models.User(
        username=user_create.username,
        password=pwd_context.hash(user_create.password),
        email=user_create.email
    )
    db.add(db_user)
    db.commit()


def get_existing_user(db: Session, user_create: schemas.UserCreate):
    return db.query(models.User).filter(
        (models.User.username == user_create.username) |
        (models.User.email == user_create.email)
    ).first()


def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()
