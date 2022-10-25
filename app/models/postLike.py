from .db import db
from datetime import datetime


class PostLike(db.Model):
    __tablename__ = 'post_likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('images.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    users = db.relationship('user', back_populates="post_likes", cascade='all, delete-orphan')
    posts = db.relationship('post', back_populates='post_likes', cascade='all, delete-orphan')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'imageId': self.image_id,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
