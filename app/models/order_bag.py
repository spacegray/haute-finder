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