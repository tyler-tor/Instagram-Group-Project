from app.models import db, followers




def seed_follows():
    follow1 = followers(
        follower_id = 1,
        followed_id= 2,
    )
    follow2 = followers(
        follower_id = 2,
        followed_id= 3,
    )
    follow3 = followers(
        follower_id = 3,
        followed_id= 1,
    )
    follow4 = followers(
        follower_id = 3,
        followed_id= 2,
    )
    db.session.add(follow1)
    db.session.add(follow2)
    db.session.add(follow3)
    db.session.add(follow4)
    db.session.commit()

def undo_follows():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE;')
    db.session.commit()
