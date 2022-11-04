from app.models import db, Post


def seed_posts():
    post1 = Post(
      user_id=1,
      img_url='https://static.vecteezy.com/system/resources/previews/000/566/369/original/mini-camera-flat-isolated-vector-icon-illustration.jpg',
      caption='this is post1 for demo user',
      likes=1
    )
    post2 = Post(
      user_id=2,
      img_url='https://static.vecteezy.com/system/resources/previews/000/566/369/original/mini-camera-flat-isolated-vector-icon-illustration.jpg',
      caption='this is post2 for marnie',
      likes=1
    )
    post3 = Post(
      user_id=3,
      img_url='https://static.vecteezy.com/system/resources/previews/000/566/369/original/mini-camera-flat-isolated-vector-icon-illustration.jpg',
      caption='this is post3 for bobbie',
      likes=1
    )

    post4 = Post(
      user_id=6,
      img_url='https://i.imgur.com/0VVm4o2.png',
      caption='check out my first project!',
      likes=4
    )


    post5 = Post(
      user_id=4,
      img_url='https://i.imgur.com/qqeJBOv.png',
      caption='best sova line up.'
    )

    post6 = Post(
      user_id=4,
      img_url='https://i.imgur.com/kOeJwgB.png',
      caption='double shock dart at A!',
      likes=2
    )

    post7 = Post(
      user_id=5,
      img_url='https://i.imgur.com/61Axij2.png',
      caption='look at my new design!',
      likes=2
    )

    post8 = Post(
      user_id=5,
      img_url='https://i.imgur.com/DUdZ9nr.png',
      caption='i did it!'
    )

    post9 = Post(
      user_id=5,
      img_url='https://i.imgur.com/eqfLgpl.png',
      caption='I hate icebox'
    )

    post10 = Post(
      user_id=6,
      img_url='https://i.imgur.com/NJ5WZLO.png',
      caption='more darts?'
    )

    post11 = Post(
      user_id=6,
      img_url='https://i.imgur.com/BqIOtQi.png',
      caption='double darts!'
    )

    post12 = Post(
      user_id=7,
      img_url='https://i.imgur.com/dcuhwrc.png',
      caption='sova main?!'
    )

    post13 = Post(
      user_id=7,
      img_url='https://i.imgur.com/CCyyIE4.png',
      caption='never used this dart'
    )

    post14 = Post(
      user_id=7,
      img_url='https://i.imgur.com/BqIOtQi.png',
      caption='double darts!'
    )

    post15 = Post(
      user_id=8,
      img_url='https://i.imgur.com/fXuogz8.png',
      caption='double darts for b',
      likes = 1
    )
    post16 = Post(
      user_id=8,
      img_url='https://i.imgur.com/L2ijf4I.png',
      caption='double darts a main',
      likes=4
    )
    post17 = Post(
      user_id=8,
      img_url='https://i.imgur.com/G4kimLI.png',
      caption='double darts for tiles'
    )

    post18 = Post(
      user_id=9,
      img_url='https://i.imgur.com/bZjtfjO.png',
      caption='recon dart?!'
    )

    post19 = Post(
      user_id=9,
      img_url='https://i.imgur.com/24YbNDO.png',
      caption='A hell recon?'
    )

    post20 = Post(
      user_id=9,
      img_url='https://i.imgur.com/OGSp4d2.png',
      caption='recon dart for garden'
    )

    post21 = Post(
      user_id=10,
      img_url='https://i.imgur.com/xqDJkhv.png',
      caption='recon dart for A hell',
      likes=2
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.add(post10)
    db.session.add(post11)
    db.session.add(post12)
    db.session.add(post13)
    db.session.add(post14)
    db.session.add(post15)
    db.session.add(post16)
    db.session.add(post17)
    db.session.add(post18)
    db.session.add(post19)
    db.session.add(post20)
    db.session.add(post21)


    db.session.commit()


def undo_posts():
    db.session.execute('DELETE FROM posts;')
    db.session.commit()
