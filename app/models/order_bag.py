from .db import db


order_bag = db.Table( 
    'orders_bags', db.Model.metadata,
    db.Column('order_bag', db.Integer, db.ForeignKey('orders.id', ondelete='CASCADE')),
    db.Column('listing_id', db.Integer, db.ForeignKey('listings.id', ondelete='CASCADE'))
)
# class order_bag(db.Model):
#     __tablename__ = 'order_bags'

#     order_bag = db.Column('order_bag', db.Integer, db.ForeignKey('orders.id'),
#                           primary_key=True
#                           )
#     listing_id = db.Column('listing_id', db.Integer, db.ForeignKey('listings.id'),
#                            primary_key=True
#                            )
