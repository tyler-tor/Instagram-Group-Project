from app.models import db, Follow


def seed_follows():
    follow1 = Follow(
        user_id = 1,
        following_id= 2,
    )
    follow2 = Follow(
        user_id = 2,
        following_id= 3,
    )
    follow3 = Follow(
        user_id = 3,
        following_id= 1,
    )
    follow4 = Follow(
        user_id = 3,
        following_id= 2,
    )
    db.session.add(follow1)
    db.session.add(follow2)
    db.session.add(follow3)
    db.session.add(follow4)
    db.session.commit()

def undo_follows():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE;')
    db.session.commit()
