from crypt import methods
from flask import Blueprint, jsonify
from flask_login import login_required, current_user, logout_user
from app.models import User, db, Post

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    #included all posts by the user in the return, it will be useful for looking at profile pages.
    user = User.query.get(id)
    user = user.to_dict()
    posts = Post.query.filter(Post.user_id == user['id']).all()
    user['Posts'] = [post.to_dict() for post in posts]
    return user


@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):
    user = User.query.get(id)
    if current_user.is_authenticated and current_user.id == user.id:
        logout_user()
        db.session.delete(user)
        db.session.commit()
        return {'message': 'Success'}
    #----------------------------need to fix error handling for when you delete a given user -------------------------------------------------------
    error = Exception('You are not this user')
    return {'errors': validation_errors_to_error_messages(error)}, 401

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
                #remove current users from following users follower array
                f_user.followers.remove(user)
                db.session.add(f_user)
                db.session.commit()
                curr_user = curr_user.to_dict()
                f_user = f_user.to_dict()

                return{'Current User': curr_user, 'Following User' : f_user}
                # return {'Message': f'user {curr_user.id} unfollows user {f_user.id}'}
        #error handling later!
