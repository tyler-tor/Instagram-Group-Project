from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User( #1
        username='Demo', email='demo@aa.io', password='password', first_name='demo', last_name='user')
    marnie = User( #2
        username='marnie', email='marnie@aa.io', password='password', first_name='demo1', last_name='user1')
    bobbie = User( #3
        username='bobbie', email='bobbie@aa.io', password='password', first_name='demo2', last_name='user2')
    theo = User( #4
        username='theoman42', email='theo@aa.io', password='password', first_name='theo', last_name='fan')
    derek = User( #5
        username='torman', email='tor@aa.io', password='password', first_name='derk', last_name='tor')
    alan = User( #6
        username='awdel88', email='awd@aa.io', password='password', first_name='alan', last_name='del')
    gabe = User( #7
        username='gabeknight', email='knight@aa.io', password='password', first_name='gabriel', last_name='knight')
    grace = User( #8
        username='grace2', email='chang@aa.io', password='password', first_name='grace', last_name='wong')
    wilson = User( #9
        username='lalawill', email='healz@aa.io', password='password', first_name='wilson', last_name='lee')
    chris = User( #10
        username='chrisTheMan', email='tofu@aa.io', password='password', first_name='chris', last_name='pork')



    demo.followers = [marnie, bobbie, alan, theo, derek, chris]
    marnie.followers = [bobbie, demo, alan, gabe, wilson]
    bobbie.followers = [marnie, demo, grace, theo, derek, alan, chris]
    theo.followers = [alan, derek, gabe]
    derek.followers = [theo, alan, bobbie]
    gabe.followers = [alan, chris]
    grace.followers = [chris, bobbie, marnie]
    chris.followers = [alan]


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(theo)
    db.session.add(derek)
    db.session.add(alan)
    db.session.add(gabe)
    db.session.add(grace)
    db.session.add(wilson)
    db.session.add(chris)

    db.session.commit()






# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('DELETE FROM users;')

    db.session.execute('DELETE FROM follows;') #added this to also clear out the follows table when unseeding.
    db.session.commit()
