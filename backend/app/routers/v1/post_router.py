from datetime import timedelta, datetime

from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from jose import jwt
from sqlalchemy.orm import Session
from starlette import status

from app.database import crud, schemas
from app.database.database import get_db

router = APIRouter(
    prefix="/api/v1/post",
)


@router.post("/create", status_code=status.HTTP_204_NO_CONTENT)
def create_post(post_create: schemas.PostCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_username(
        db=db, username=post_create.author_username)

    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"User with username {post_create.author_username} does not exist"
        )

    crud.create_post(db=db, post_create=post_create)


@router.get("/all", response_model=schemas.PostList)
def get_posts(skip: int = 0, limit: int = 15, db: Session = Depends(get_db)):
    total, post_list = crud.get_posts(db=db, skip=skip, limit=limit)
    return schemas.PostList(total=total, posts=post_list)
