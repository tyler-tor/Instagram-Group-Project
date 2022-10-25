"""empty message

Revision ID: 7195877acc46
Revises: b050ab0b08a3
Create Date: 2022-10-24 19:59:52.351916

"""
from alembic import op
import sqlalchemy as sa
from datetime import datetime


# revision identifiers, used by Alembic.
revision = '7195877acc46'
down_revision = 'b050ab0b08a3'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('post_likes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime, default=datetime.now),
    sa.Column('updated_at', sa.DateTime, default=datetime.now, onupdate=datetime.now),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='CASCADE' ),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ondelete='CASCADE' ),
    sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    op.drop_table('')
