from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user, logout_user
from app.models import Post, User, db, PostLike
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


# Add post like endpoints here!
@post_routes.route('/<int:id>/likes', methods=['GET'])
@login_required
def get_user_liked(id):
    '''
        get all users that liked a post
    '''
    post = Post.query.get(id)
    if(post):
        post_user_liked_arr = [post_like.users.to_dict() for post_like in post.post_likes]
        # print('DEBUG IN POSTLIKES --------------------------------------------', post_user_liked_arr)
        post_user_dict = {'user' : []}
        for user in post_user_liked_arr:
            post_user_dict['user'].append({'id':user['id'], 'username':user['username'], 'profilePic':user['profilePicture']})
            print(user)
        return post_user_dict
    return {'errors': 'This post does not exist'}, 404

@post_routes.route('/<int:id>/likes', methods=['POST'])
@login_required
def like_post(id):
    '''
        current user like a post
    '''
    post = Post.query.get(id)
    user = User.query.get(current_user.id)
    if(post):
        post_like = PostLike(
        user_id=current_user.id,
        post_id=id
        )

        post_dict = post.to_dict()
        user_dict = user.to_dict()
        user_post = {'userId': user_dict['id'], 'postId': post_dict['id']}
        db.session.add(post_like)
        db.session.commit()
        return user_post
    return{'errors': 'This post does not exist'}, 404

@post_routes.route('/<int:id>/likes', methods=['DELETE'])
@login_required
def unlike_post(id):
    '''
        current user unlike post
    '''
    post = Post.query.get(id)
    user = User.query.get(current_user.id)
    if(post):
        for post in post.post_likes:
            # print('DEBUG TEST IN DELETE ROUTE---------------------------------------------',post.to_dict())
            post_dict = post.to_dict()
            if post_dict['userId'] == current_user.id and post_dict['postId'] == id:
                db.session.delete(post)
                db.session.commit()
                return{'msg' : f'user {current_user.id} unliked post {id}'}
        return {'errors' : 'coult not find post'}

        
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
