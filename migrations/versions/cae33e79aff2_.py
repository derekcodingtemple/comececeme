"""empty message

Revision ID: cae33e79aff2
Revises: 8c4008b33181
Create Date: 2020-09-07 11:15:55.720410

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cae33e79aff2'
down_revision = '8c4008b33181'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('order_product_id_fkey', 'order', type_='foreignkey')
    op.create_foreign_key(None, 'order', 'hair', ['product_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'order', type_='foreignkey')
    op.create_foreign_key('order_product_id_fkey', 'order', 'product', ['product_id'], ['id'])
    # ### end Alembic commands ###