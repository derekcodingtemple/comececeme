"""changed the car class to take hair products

Revision ID: f99270f72e83
Revises: c2bafbcae2a0
Create Date: 2020-09-01 06:18:18.482500

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f99270f72e83'
down_revision = 'c2bafbcae2a0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart', sa.Column('hair_id', sa.Integer(), nullable=False))
    op.drop_constraint('cart_productId_fkey', 'cart', type_='foreignkey')
    op.create_foreign_key(None, 'cart', 'hair', ['hair_id'], ['id'])
    op.drop_column('cart', 'productId')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart', sa.Column('productId', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'cart', type_='foreignkey')
    op.create_foreign_key('cart_productId_fkey', 'cart', 'product', ['productId'], ['id'])
    op.drop_column('cart', 'hair_id')
    # ### end Alembic commands ###