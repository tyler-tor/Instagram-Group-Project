"""empty message

Revision ID: b050ab0b08a3
Revises: d36c8e9a6cc9
Create Date: 2022-10-24 19:40:14.562101

"""
from alembic import op
from datetime import datetime
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b050ab0b08a3'
down_revision = 'd36c8e9a6cc9'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('users',
    sa.Column('created_at', sa.DateTime, default=datetime.now))
    op.add_column('users',
    sa.Column('updated_at', sa.DateTime, default=datetime.now, onupdate=datetime.now))
    op.add_column('posts',
    sa.Column('created_at', sa.DateTime, default=datetime.now))
    op.add_column('posts',
    sa.Column('updated_at', sa.DateTime, default=datetime.now, onupdate=datetime.now))


def downgrade():
    op.drop_column('users', 'created_at')
    op.drop_column('users', 'updated_at')
    op.drop_column('posts', 'created_at')
    op.drop_column('posts', 'updated_at')
