"""empty message

Revision ID: dad4e1cf1d9c
Revises: 1f54acb90606
Create Date: 2021-11-17 19:44:45.002776

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dad4e1cf1d9c'
down_revision = '1f54acb90606'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('brands', 'imageURL')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('brands', sa.Column('imageURL', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    # ### end Alembic commands ###