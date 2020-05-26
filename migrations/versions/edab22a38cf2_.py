"""empty message

Revision ID: edab22a38cf2
Revises: 03254a3da60f
Create Date: 2020-05-26 13:57:16.025671

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'edab22a38cf2'
down_revision = '03254a3da60f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('service', sa.Column('price', sa.Float(), nullable=True))
    op.create_unique_constraint(None, 'service', ['title'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'service', type_='unique')
    op.drop_column('service', 'price')
    # ### end Alembic commands ###
