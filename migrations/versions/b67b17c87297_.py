"""empty message

Revision ID: b67b17c87297
Revises: d36c8e9a6cc9
Create Date: 2022-10-24 02:44:39.284776

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b67b17c87297'
down_revision = 'd36c8e9a6cc9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('body', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    # ### end Alembic commands ###