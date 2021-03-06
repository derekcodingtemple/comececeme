"""empty message

Revision ID: fcb48a215f3c
Revises: 85c1a721b3b2
Create Date: 2020-05-28 19:46:48.869036

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fcb48a215f3c'
down_revision = '85c1a721b3b2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('in_stock', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('product', 'in_stock')
    # ### end Alembic commands ###
