from .db import db


Like = db.Table(
    'like',
    db.Column('userId', db.Integer, db.ForeignKey('user.id'), 
    primary_key=True
    ),
    db.Column('listingId', db.Integer, db.ForeignKey('listing.id'),
    primary_key=True)
)                