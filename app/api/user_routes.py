from crypt import methods
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):
    user = User.query.get(id)
    print('TEST-------------------------->', user.to_dict())
    if current_user.is_authenticated and current_user.id == user.id:
        db.session.delete(user)
        db.session.commit()
        return user.to_dict()


@user_routes.route('/<int:id>/followers', methods=['GET'])
@login_required
def get_followers(id):
    '''
        get users followers by id
    '''
    user = User.query.get(id)
    if(not user):
        #error handling here later
        pass
    user = user.to_dict()

    # [post_arr.append(post.to_dict()) for post in posts]
    # print('TEST------------------------------------------------>',user['followers'])

    return {'followers': user['followers']}


@user_routes.route('/<int:id>/following', methods=['GET'])
@login_required
def get_following(id):
    '''
        get user's who user(id) is following
    '''
    user = User.query.get(id)
    if(user):
        user = user.to_dict()
        # print('TEST------------------------->',user['following'])
        return{'following': user['following']}

@user_routes.route('/<int:id>/follow', methods=['POST'])
@login_required
#test with id 6 and id 7
def follow_user(id):
    curr_user = User.query.get(current_user.id)
    f_user = User.query.get(id)
    if(curr_user and f_user):

        f_user.followers.append(curr_user)

        db.session.add(f_user)
        db.session.commit()

        curr_user = curr_user.to_dict()
        f_user = f_user.to_dict()

        return{'Current User': curr_user, 'Following User' : f_user}
    #add error handling later!

@user_routes.route('/<int:id>/follow', methods=['DELETE'])
@login_required
def unfollow_user(id):
    curr_user = User.query.get(current_user.id)
    f_user = User.query.get(id)

    if(curr_user and f_user):
        # curr_user_dict = curr_user.to_dict()

        for idx, user in enumerate(f_user.followers):
            # user = user.to_dict()

            if(user.id == curr_user.id):
                print('MATCH!!!', idx)
                #remove current users from following users follower array
                f_user.followers.remove(user)
                db.session.add(f_user)
                db.session.commit()
                return {'Message': f'user {curr_user.id} unfollows user {f_user.id}'}
        #error handling later!
