from flask.cli import AppGroup
from .users import seed_users, undo_users
from .posts import seed_posts, undo_posts
from .comments import seed_comments, undo_comments
from .postLikes import seed_post_likes, undo_post_likes
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.post_likes RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        undo_users()
        undo_posts()
        undo_comments()
        # undo_follows()
        undo_post_likes()
        db.session.commit()
    seed_users()
    seed_posts()
    seed_comments()
    # seed_follows()
    seed_post_likes()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_posts()
    undo_comments()
    # undo_follows()
    undo_post_likes()
    # Add other undo functions here
