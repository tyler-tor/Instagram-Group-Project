"""empty message

Revision ID: 356ea97f15e1
Revises: 8e380edbf296
Create Date: 2022-10-27 19:55:42.773581

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '356ea97f15e1'
down_revision = '8e380edbf296'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('users',
    sa.Column('profile_picture', sa.String(255)))


def downgrade():
    op.drop_column('users',
    sa.Column('profile_picture'))
