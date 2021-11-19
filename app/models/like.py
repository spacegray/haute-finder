from .db import db


like = db.Table(
    'likes',
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), 
    primary_key=True
    ),
    db.Column('listingId', db.Integer, db.ForeignKey('listings.id'),
    primary_key=True)
)                