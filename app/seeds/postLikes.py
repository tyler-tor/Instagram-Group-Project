from app.models import db, PostLike

def seed_post_likes():
    postlike1 = PostLike(
        user_id=1,
        post_id=3
    )
    postlike2 = PostLike(
        user_id=2,
        post_id=1
    )
    postlike3 = PostLike(
        user_id=3,
        post_id=2
    )


    db.session.add(postlike1)
    db.session.add(postlike2)
    db.session.add(postlike3)

    db.session.commit()


def undo_post_likes():
    db.session.execute('DELETE FROM post_likes;')
    db.session.commit()
