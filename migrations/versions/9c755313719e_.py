"""empty message

Revision ID: 9c755313719e
Revises: 17b708384e57
Create Date: 2022-10-24 19:39:42.498078

"""
from email.policy import default
from alembic import op
import sqlalchemy as sa
from datetime import datetime


# revision identifiers, used by Alembic.
revision = '9c755313719e'
down_revision = '17b708384e57'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('comments', sa.Column('created_at', sa.DateTime, default=datetime.now))
    op.add_column('comments', sa.Column('updated_at', sa.DateTime, default=datetime.now, onupdate=datetime.now))
    pass


def downgrade():
    op.drop_column('comments', 'created_at')
    op.drop_column('comments', 'updated_at')
    pass
