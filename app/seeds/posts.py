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
    # ----------------------------------------------------------------------------------
    post22 = Post(
      user_id=10,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/1.jpg',
      caption='If I dont like something, Ill stay away from it.',
      likes=4
    )
    post23 = Post(
      user_id=10,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/10.jpg',
      caption='He figured a few sticks of dynamite were easier than a fishing pole to catch fish.',
      likes=3
    )
    post24 = Post(
      user_id=1,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/11.jpg',
      caption='The three-year-old girl ran down the beach as the kite flew behind her.',
      likes=3
    )
    post25 = Post(
      user_id=1,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/12.jpg',
      caption='The light in his life was actually a fire burning all around him.',
      likes=5
    )
    post26 = Post(
      user_id=2,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/13.jpg',
      caption='She was the type of girl who wanted to live in a pink house.',
      likes=6
    )
    post27 = Post(
      user_id=2,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/14.jpg',
      caption='He had decided to accept his fate of accepting his fate.',
      likes=2
    )
    post28 = Post(
      user_id=3,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/15.jpg',
      caption='Its important to remember to be aware of rampaging grizzly bears.',
      likes=5
    )
    post29 = Post(
      user_id=3,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/16.jpg',
      caption='There should have been a time and a place, but this wasnt it.',
      likes=4
    )
    post30 = Post(
      user_id=11,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/17.jpg',
      caption='The minute she landed she understood the reason this was a fly-over state.',
      likes=5
    )
    post31 = Post(
      user_id=11,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/18.jpg',
      caption='Two more days and all his problems would be solved.',
      likes=3
    )
    post32 = Post(
      user_id=11,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/19.jpg',
      caption='Purple is the best city in the forest.',
      likes=7
    )
    post33 = Post(
      user_id=12,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/2.jpg',
      caption='She used her own hair in the soup to give it more flavor.',
      likes=5
    )
    post34 = Post(
      user_id=12,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/20.jpg',
      caption='Id always thought lightning was something only I could see.',
      likes=5
    )
    post35 = Post(
      user_id=12,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/21.jpg',
      caption='You cant compare apples and oranges, but what about bananas and plantains?',
      likes=4
    )
    post36 = Post(
      user_id=13,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/22.jpg',
      caption='The best key lime pie is still up for debate.',
      likes=2
    )
    post37 = Post(
      user_id=13,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/23.jpg',
      caption='I love bacon, beer, birds, and baboons.',
      likes=2
    )
    post38 = Post(
      user_id=13,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/24.jpg',
      caption='The beauty of the sunset was obscured by the industrial cranes.',
      likes=1
    )
    post39 = Post(
      user_id=14,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/25.jpg',
      caption='She did a happy dance because all of the socks from the dryer matched.',
      likes=5
    )
    post40 = Post(
      user_id=14,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/26.jpg',
      caption='The thick foliage and intertwined vines made the hike nearly impossible.',
      likes=6
    )
    post41 = Post(
      user_id=14,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/27.jpg',
      caption='That must be the tenth time Ive been arrested for selling deep-fried cigars.',
      likes=4
    )
    post42 = Post(
      user_id=15,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/28.jpg',
      caption='Jerry liked to look at paintings while eating garlic ice cream.',
      likes=5
    )
    post43 = Post(
      user_id=15,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/29.jpg',
      caption='He was sure the Devil created red sparkly glitter.',
      likes=7
    )
    post44 = Post(
      user_id=15,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/3.jpg',
      caption='The childs favorite Christmas gift was the large box her fathers lawnmower came in.',
      likes=5
    )
    post45 = Post(
      user_id=4,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/4.jpg',
      caption='He wondered if it could be called a beach if there was no sand.',
      likes=2
    )
    post46 = Post(
      user_id=1,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/5.jpg',
      caption='It had been sixteen days since the zombies first attacked.',
      likes=2
    )
    post47 = Post(
      user_id=1,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/6.jpg',
      caption='He had a vague sense that trees gave birth to dinosaurs.',
      likes=2
    )
    post48 = Post(
      user_id=2,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/7.jpg',
      caption='Peanut butter and jelly caused the elderly lady to think about her past.',
      likes=4
    )
    post49 = Post(
      user_id=5,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/8.jpg',
      caption='He never understood why what, when, and where left out who.',
      likes=2
    )
    post50 = Post(
      user_id=8,
      img_url='https://capstone-strava-clone-aktiv.s3.us-west-2.amazonaws.com/Instagram+Seed+post+photos/9.jpg',
      caption='He created a pig burger out of beef.',
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
    db.session.add_all([
      post22,
      post23,
      post24,
      post25,
      post26,
      post27,
      post28,
      post29,
      post30,
      post31,
      post32,
      post33,
      post34,
      post35,
      post36,
      post37,
      post38,
      post39,
      post40,
      post41,
      post42,
      post43,
      post44,
      post45,
      post46,
      post47,
      post48,
      post49,
      post50
      ])

    db.session.commit()


def undo_posts():
    db.session.execute('DELETE FROM posts;')
    db.session.commit()
