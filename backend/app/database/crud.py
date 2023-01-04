from passlib.context import CryptContext
from sqlalchemy.orm import Session
from app.database import models, schemas
from datetime import datetime
import json

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


def get_posts(db: Session, skip: int = 0, limit: int = 15) -> tuple[int, list[models.Post]]:
    db_posts = db.query(models.Post).order_by(models.Post.created_at.desc())
    return db_posts.count(), db_posts.offset(skip).limit(limit).all()


def create_post(db: Session, post_create: schemas.PostCreate):
    db_post = models.Post(
        title=post_create.title,
        content=post_create.content,
        author_username=post_create.author_username,
        created_at=datetime.utcnow(),
        tag=post_create.tag
    )

    db.add(db_post)
    db.commit()
