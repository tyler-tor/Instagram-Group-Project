"""empty message

Revision ID: 0a1fc2022eaa
Revises: 9c755313719e
Create Date: 2022-10-24 19:46:35.974727

"""
from alembic import op
import sqlalchemy as sa
from datetime import datetime


# revision identifiers, used by Alembic.
revision = '0a1fc2022eaa'
down_revision = '9c755313719e'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('follows', sa.Column('created_at', sa.DateTime, default=datetime.now))
    op.add_column('follows', sa.Column('updated_at', sa.DateTime, default=datetime.now, onupdate=datetime.now))



def downgrade():
    op.drop_column('follows', 'created_at')
    op.drop_column('follows', 'updated_at')
    pass
