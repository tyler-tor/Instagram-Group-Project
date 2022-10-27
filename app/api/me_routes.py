from flask import Blueprint, jsonify, session, request
from app.models import User, db, Post
from flask_login import current_user, login_user, logout_user, login_required

me_routes = Blueprint('me', __name__)

@me_routes.route('/following/posts')
def me_following_posts():
    user = User.query(current_user.id)
    if(user):
        user = user.to_dict()
        return {'following': user['following']}
