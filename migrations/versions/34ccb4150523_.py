"""empty message

Revision ID: 34ccb4150523
Revises: 81855f40c65a
Create Date: 2020-06-05 18:57:24.054852

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '34ccb4150523'
down_revision = '81855f40c65a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart', sa.Column('quantity', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cart', 'quantity')
    # ### end Alembic commands ###
