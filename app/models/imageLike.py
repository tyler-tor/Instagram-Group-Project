from .db import db


class ImageLike(db.Model):
    __tablename__ = 'imageLikes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    image_id = db.Column(db.Integer, db.ForeignKey('images.id'), nullable=False)

    users = db.relationship('user', back_populates="imageLike")
    images = db.relationship('image', back_populates='imageLike')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'imageId': self.image_id
        }
