from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    likes = db.Column(db.Integer, default=0)
    img_url = db.Column(db.String(255))
    caption = db.Column(db.String(150))

    users = db.relationship('user', back_populates="post")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'likes': self.likes,
            'imgUrl': self.img_url,
            'caption': self.caption
        }
