from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user, logout_user
from app.models import Post, User, Comment, db
from app.forms.create_post import CreatePost
from app.forms.update_post import UpdatePost
from app.forms.create_comment import CreateComment


post_routes = Blueprint('posts', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#get all posts
@post_routes.route('/')
@login_required
def posts():
    posts = Post.query.options(db.joinedload(Post.users)).all()
    posts_dict = {}
    posts_dict["Posts"] = [{**post.to_dict(), 'users': post.users.username} for post in posts]
    return posts_dict


@post_routes.route('/', methods=['POST'])
@login_required
def create_post():
    form = CreatePost()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post(
            user_id=current_user.id,
            caption=form.data['caption'],
            img_url=form.data['img_url']
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@post_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_post(id):
    form = UpdatePost()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        post = Post.query.get(id)
        post.caption = form.data['caption']
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    if post and current_user.id == post.user_id:
        db.session.delete(post)
        db.session.commit()
        return {'message': 'Success'}
    return {'errors': 'This post does not exist'}


@post_routes.route('/<int:id>/comments')
@login_required
def comments_on_post(id):
    post = Post.query.get(id)
    if post:
        comments = Comment.query.filter(Comment.post_id == post.id).options(db.joinedload(Comment.users)).all()
        print(comments)
        comments_dict = {}
        comments_dict["Comments"] = [{**comment.to_dict(), 'users': {
            'username': comment.users.username, 'id': comment.users.id
            }} for comment in comments]
        return comments_dict
    return {'errors': 'This post does not exist'}


@post_routes.route('/<int:id>/comments', methods=['POST'])
@login_required
def create_comment_post(id):
    post = Post.query.get(id)
    form = CreateComment()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(
            user_id=current_user.id,
            body=form.data['body'],
            post_id=post.id
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


