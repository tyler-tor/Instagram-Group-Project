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

    postlike4 = PostLike(
        user_id=4,
        post_id=6
    )
    postlike5 = PostLike(
        user_id=4,
        post_id=15
    )
    postlike6 = PostLike(
        user_id=4,
        post_id=16
    )
    postlike7 = PostLike(
        user_id=5,
        post_id=16
    )
    postlike8 = PostLike(
        user_id=6,
        post_id=16
    )
    postlike9 = PostLike(
        user_id=8,
        post_id=16
    )

    postlike10 = PostLike(
        user_id=7,
        post_id=21
    )
    postlike11 = PostLike(
        user_id=8,
        post_id=21
    )

    postlike12 = PostLike(
        user_id=10,
        post_id=6
    )
    postlike13 = PostLike(
        user_id=10,
        post_id=4
    )
    postlike14 = PostLike(
        user_id=1,
        post_id=4
    )
    postlike15 = PostLike(
        user_id=2,
        post_id=4
    )
    postlike16 = PostLike(
        user_id=3,
        post_id=7
    )
    postlike17 = PostLike(
        user_id=8,
        post_id=7
    )



    db.session.add(postlike1)
    db.session.add(postlike2)
    db.session.add(postlike3)
    db.session.add(postlike4)
    db.session.add(postlike5)
    db.session.add(postlike6)
    db.session.add(postlike7)
    db.session.add(postlike8)
    db.session.add(postlike9)
    db.session.add(postlike10)
    db.session.add(postlike11)
    db.session.add(postlike12)
    db.session.add(postlike13)
    db.session.add(postlike14)
    db.session.add(postlike15)
    db.session.add(postlike16)
    db.session.add(postlike17)

    db.session.commit()


def undo_post_likes():
    db.session.execute('DELETE FROM post_likes;')
    db.session.commit()
