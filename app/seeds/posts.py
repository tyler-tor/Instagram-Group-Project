from app.models import db, Post


def seed_posts():
    post1 = Post(
      user_id=1,
      image_url='https://static.vecteezy.com/system/resources/previews/000/566/369/original/mini-camera-flat-isolated-vector-icon-illustration.jpg',
      caption='this is post1 for demo user'
    )
    post2 = Post(
      user_id=2,
      image_url='https://static.vecteezy.com/system/resources/previews/000/566/369/original/mini-camera-flat-isolated-vector-icon-illustration.jpg',
      caption='this is post2 for marnie'
    )
    post3 = Post(
      user_id=3,
      image_url='https://static.vecteezy.com/system/resources/previews/000/566/369/original/mini-camera-flat-isolated-vector-icon-illustration.jpg',
      caption='this is post3 for bobbie'
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)

    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
