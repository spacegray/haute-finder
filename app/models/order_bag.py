from .db import db


order_bag = db.Table(
    'orders_bags',
    db.Column('order_bag', db.Integer, db.ForeignKey('orders.id'),
              primary_key=True
              ),
    db.Column('listing_id', db.Integer, db.ForeignKey('listings.id'),
              primary_key=True
              )
)
# class order_bag(db.Model):
#     __tablename__ = 'order_bags'

#     order_bag = db.Column('order_bag', db.Integer, db.ForeignKey('orders.id'),
#                           primary_key=True
#                           )
#     listing_id = db.Column('listing_id', db.Integer, db.ForeignKey('listings.id'),
#                            primary_key=True
#                            )
