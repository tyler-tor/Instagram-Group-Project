from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user, logout_user
from app.models import Post, User, db, PostLike
from app.models import Post, User, Comment, db
from app.forms.create_post import CreatePost
from app.forms.update_post import UpdatePost
from app.forms.create_comment import CreateComment

#!needed for a query to get the latest post.
from sqlalchemy import desc


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
    posts_dict["Posts"] = [{**post.to_dict(), 'users': {
        'username': post.users.username, 'profilePicture': post.users.profile_picture,
        'userId': post.users.id}} for post in posts]
    return posts_dict

@post_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_post_by_id(id):
    post = Post.query.get(id)
    post_dict = post.to_dict()
    if post :
        user = User.query.get(post.user_id)
        post_dict['users'] = {
            'profilePicture' : user.profile_picture,
            'userId' : user.id,
            'username' : user.username
        }
    return post_dict

@post_routes.route('/', methods=['POST'])
# @login_required
def create_post(): #! start here for backend aws connection
    form = CreatePost()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post(
            user_id=current_user.id,
            caption=form.data['caption'],
            img_url= form.data['img_url']
        )
        db.session.add(post)
        db.session.commit()
        #!Had to requery to get the post with all the info created.
        return_post = Post.query.order_by(desc(Post.created_at)).first()
        post_dict = return_post.to_dict()
        #!Coded added here to fix an issue with the return on thunk action. It is changed to included users key with user info.
        user = User.query.get(post.user_id)
        post_dict['users'] = {
            'profilePicture' : user.profile_picture,
            'userId' : user.id,
            'username' : user.username
        }
        return post_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@post_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_post(id):
    form = UpdatePost()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        post = Post.query.get(id)
        user = User.query.get(post.user_id)
        post.caption = form.data['caption']
        db.session.commit()
        post_dict = post.to_dict()
        #! updated code to match the return from the other post routes. needed to include the associated user.
        post_dict['users'] = {
            'profilePicture' : user.profile_picture,
            'userId' : user.id,
            'username' : user.username
        }
        return post_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    if post and current_user.id == post.user_id:
        db.session.delete(post)
        db.session.commit()
        user = User.query.get(current_user.id)

        return {'message': 'Success'}
    return {'errors': 'This post does not exist'}


# Add post like endpoints here!


@post_routes.route('/<int:id>/likes/users', methods=['GET'])
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
            post_user_dict['user'].append({'id':user['id'], 'username':user['username'], 'profilePicture':user['profilePicture']})
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
    if(post):
        post_like = PostLike(
        user_id=current_user.id,
        post_id=id
        )
        post.likes += 1
        db.session.add(post_like)
        db.session.commit()
        # user = User.query.get(current_user.id)
        # #! update return to new user table
        # user_dict = user.to_dict();
        # for postId in user_dict['likes']:
        #     post = Post.query.get(postId['postId'])
        #     postId['likes'] = post.likes


        return {'likes' : post.likes, 'postId' : post.id }
    return{'errors': 'This post does not exist'}, 404

@post_routes.route('/<int:id>/likes', methods=['DELETE'])
@login_required
def unlike_post(id):
    '''
        current user unlike post
    '''
    curr_post = Post.query.get(id)
    if(curr_post):
        for post in curr_post.post_likes:
            # print('DEBUG TEST IN DELETE ROUTE---------------------------------------------',post.to_dict())
            post_dict = post.to_dict()
            curr_post_dict = curr_post.to_dict()
            if post_dict['userId'] == current_user.id and post_dict['postId'] == id:
                
                if curr_post.likes > 0:
                    curr_post.likes -= 1

                db.session.delete(post)
                db.session.commit()

                #! update return with full user dict.
                print('DELETE LIKE ENDPOINT---------------------------------------------', curr_post_dict)
                return {'postId': post_dict['postId'], 'likes' : curr_post_dict['likes']}
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
            'username': comment.users.username, 'id': comment.users.id, 'profilePicture' : comment.users.profile_picture
            }} for comment in comments]
        for comment in comments_dict['Comments']:
            comment['myComment'] = False
            if comment['userId'] == current_user.id:
                comment['myComment'] = True

        return comments_dict
    return {'errors': 'This post does not exist'}


@post_routes.route('/<int:id>/comments', methods=['POST'])
@login_required
def create_comment_post(id):
    post = Post.query.get(id)
    user = User.query.get(current_user.id)
    form = CreateComment()
    user = user.to_dict()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(
            user_id=current_user.id,
            body=form.data['body'],
            post_id=post.id
        )
        db.session.add(comment)
        db.session.commit()
        comment_dict = comment.to_dict()
        #! added comment recogintion on the backend to make front end rendering easier.
        comment_dict['myComment'] = True;
        comment_dict['users'] = {
            'userId': user['id'],
            'username': user['username'],
            'profilePicture' : user['profilePicture']
        }
        return comment_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
