from flask import Blueprint, jsonify, session, request
from app.models import User, db, Post, follows
from flask_login import current_user, login_user, logout_user, login_required

me_routes = Blueprint('me', __name__)

@me_routes.route('/following/posts')
@login_required
def me_following_posts():
    # print('test!!!!!!', current_user.id)
    user = User.query.get(current_user.id)
    # user = User.query.filter(User.id == current_user.id).filter(User.followers.any()).all()
    # #TEST
    # users = [u.to_dict() for u in user]
    # print(users)

    # #END TEST
    if(user):
        #can get associated tables by using their relationship properties IE user.posts to get all posts associated with the user.
        print('TEST IN ME_ROUTE!-----',[post.to_dict() for post in user.posts])
        user = user.to_dict()
        # print('test-------------------------------',user['following'])
        following = user['following']
        post_arr = []
        for i in range(len(following)):
            # print(following[i]['userId'])
            posts = Post.query.filter(Post.user_id == following[i]['userId']).all()
            # print([post.to_dict() for post in posts])
            [post_arr.append(post.to_dict()) for post in posts]
        print(post_arr)

        return {'Posts': post_arr}
    # return {'test': users}
