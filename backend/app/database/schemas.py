from datetime import datetime
from pydantic import BaseModel, validator, EmailStr
from typing import Optional, List


class UserCreate(BaseModel):
    username: str
    password: str
    confirm_password: str
    email: EmailStr

    @validator('username', 'password', 'confirm_password', 'email')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('Cannot be empty')
        return v

    @validator('confirm_password')
    def passwords_match(cls, v, values):
        if 'password' in values and v != values['password']:
            raise ValueError('Passwords do not match')
        return v


class User(BaseModel):
    id: int
    username: str
    password: str
    email: EmailStr

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str
    username: str


class PostCreate(BaseModel):
    title: str
    content: str
    author_username: str
    tag: Optional[str]

    @validator('title', 'content', 'author_username')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('Cannot be empty')
        return v


class Post(PostCreate):
    id: int
    created_at: datetime
    author: Optional[User] = None

    class Config:
        orm_mode = True


class PostList(BaseModel):
    total: int
    posts: List[Post]
