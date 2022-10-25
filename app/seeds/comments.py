from app.models import db, Comment


def seed_comments():
    comment1 = Comment(
        user_id=1,
        post_id=2,
        body='this is a comment from user 1 for post2'
    )
    comment2 = Comment(
        user_id=2,
        post_id=3,
        body='this is a comment from user 2 for post3'
    )
    comment3 = Comment(
        user_id=3,
        post_id=1,
        body='this is a comment from user 3 for post1'
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
