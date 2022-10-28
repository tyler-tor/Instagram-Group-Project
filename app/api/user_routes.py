from crypt import methods
from flask import Blueprint, jsonify
from flask_login import login_required, current_user, logout_user
from app.models import User, db

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
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):
    user = User.query.get(id)
    print('TEST-------------------------->', user.to_dict())
    if current_user.is_authenticated and current_user.id == user.id:
        logout_user()
        db.session.delete(user)
        db.session.commit()
        return {'message': 'Success'}
    #----------------------------need to fix error handling for when you delete a given user -------------------------------------------------------
    error = Exception('You are not this user')
    return {'errors': validation_errors_to_error_messages(error)}, 401
