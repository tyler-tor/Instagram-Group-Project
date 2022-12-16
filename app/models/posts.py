from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Post(db.Model):
    __tablename__ = 'posts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    likes = db.Column(db.Integer, default=0)
    img_url = db.Column(db.String(255))
    caption = db.Column(db.String(150))
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    users = db.relationship('User', back_populates="posts", single_parent=True)
    comments = db.relationship('Comment', back_populates="posts", cascade='all, delete-orphan', single_parent=True)
    post_likes = db.relationship('PostLike', back_populates="posts", cascade='all, delete-orphan')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'likes': self.likes,
            'imgUrl': self.img_url,
            'caption': self.caption,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
