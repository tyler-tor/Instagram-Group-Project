from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', first_name='demo', last_name='user')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', first_name='demo1', last_name='user1')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name='demo2', last_name='user2')

    demo.followers = [marnie, bobbie]
    marnie.followers = [bobbie, demo]
    bobbie.followers = [marnie, demo]


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()






# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('DELETE FROM users;')
    db.session.commit()
