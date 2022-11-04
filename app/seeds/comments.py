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
    comment4 = Comment(
        user_id=4,
        post_id=3,
        body='sick post bruh'
    )

    comment5 = Comment(
        user_id=4,
        post_id=4,
        body='huh looks kinda bad'
    )
    comment6 = Comment(
        user_id=4,
        post_id=5,
        body='meh'
    )

    comment7 = Comment(
        user_id=5,
        post_id=4,
        body='Its ok i guess'
    )

    comment8 = Comment(
        user_id=5,
        post_id=6,
        body='didnt work though?'
    )
    comment9 = Comment(
        user_id=6,
        post_id=7,
        body='huh interesting'
    )
    comment10 = Comment(
        user_id=6,
        post_id=6,
        body='hey i used this!'
    )
    comment11 = Comment(
        user_id=6,
        post_id=8,
        body='hard to time tbh but im goinna write more for more content! if this bleeds its a good thing to test!!!!'
    )

    comment12 = Comment(
        user_id=7,
        post_id=1,
        body='whats going on now? Longer comments to make sure noithing weird is going on'
    )

    comment13 = Comment(
        user_id=7,
        post_id=3,
        body='noice'
    )

    comment14 = Comment(
        user_id=8,
        post_id=12,
        body='i cant do it but im gonna keep typing to make sure there no weird css stuff going on!'
    )

    comment15 = Comment(
        user_id=8,
        post_id=7,
        body='whoa nice! whoa nicewhoa nicewhoa nice'
    )

    comment16 = Comment(
        user_id=8,
        post_id=10,
        body='hehe whatever whatever whatever whatever'
    )

    comment17 = Comment(
        user_id=9,
        post_id=14,
        body='hehe whatever This is gonna be a much longer comment to test the styling so we can check to make sure there is not any content bleeding.'
    )
    comment18 = Comment(
        user_id=9,
        post_id=8,
        body='heya'
    )
    comment19 = Comment(
        user_id=9,
        post_id=13,
        body='nooooo'
    )

    comment20 = Comment(
        user_id=10,
        post_id=1,
        body='hey nice!'
    )
    comment21 = Comment(
        user_id=10,
        post_id=6,
        body='not bad?'
    )
    comment22 = Comment(
        user_id=10,
        post_id=4,
        body='its ok'
    )
    comment23 = Comment(
        user_id=10,
        post_id=20,
        body='more seed data?'
    )
    comment24 = Comment(
        user_id=5,
        post_id=20,
        body='editing the stuff is hard'
    )
    comment25 = Comment(
        user_id=6,
        post_id=21,
        body='I barely use this one'
    )
    comment26 = Comment(
        user_id=6,
        post_id=17,
        body='nice!'
    )
    comment27 = Comment(
        user_id=7,
        post_id=16,
        body='woooooooooooo'
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)
    db.session.add(comment20)
    db.session.add(comment21)
    db.session.add(comment22)
    db.session.add(comment23)
    db.session.add(comment24)
    db.session.add(comment25)
    db.session.add(comment26)
    db.session.add(comment27)
    db.session.commit()


def undo_comments():
    db.session.execute('DELETE FROM comments;')
    db.session.commit()
