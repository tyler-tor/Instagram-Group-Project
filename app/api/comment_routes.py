from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user, logout_user
from app.models import Comment, User, db
from app.forms.update_comment import UpdateComment


comment_routes = Blueprint('comments', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@comment_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_comment(id):
    form = UpdateComment()
    form['csrf_token'].data = request.cookies['csrf_token']
    comment = Comment.query.get(id)
    user = User.query.get(current_user.id)
    user = user.to_dict()
    if comment.user_id == current_user.id:
        if form.validate_on_submit:
            comment.body = form.data['body']
            db.session.commit()
            comment_dict = comment.to_dict()
            comment_dict['users'] = {
            'userId': user['id'],
            'username': user['username'],
            'profilePicture' : user['profilePicture']
            }
            return comment_dict
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return {'errors': 'This comment does not belong to you!'}


@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    if comment and comment.user_id == current_user.id:
        db.session.delete(comment)
        db.session.commit()
        return {'message': 'Success'}
    return {'errors': 'This comment does not belong to you!'}
