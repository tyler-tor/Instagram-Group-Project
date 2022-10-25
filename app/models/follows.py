from .db import db
from datetime import datetime
class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    following_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    users = db.relationship('User', back_populates="follows", cascade='all, delete-orphan')



    def to_dict(self):
        return {
            'id': self.id,
            'followingId': self.user_id,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
