from .db import db
import datetime

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listingId = db.Column(db.Integer, db.ForeignKey('listings.id'))
    quantity = db.Column(db.Integer, nullable=True, default=0)
    total = db.Column(db.Float, nullable=True, default=0)
    orderId = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
    
    user = db.relationship('User', back_populates='orders')
    listings = db.relationship('Listing', back_populates='orders')


    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.to_simple_dict() if self.user else None,
            'listing': self.listing.to_simple_dict() if self.listing else None,
            'quantity': self.quantity,
            'total': self.total,
            'orderId': self.orderId,
        }
    
    def to_simple_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'listingId': self.listingId,
            'quantity': self.quantity,
        }

    def update(self, userId=None, listingId=None, quantity=None, total=None):
        self.userId = userId
        self.listingId = listingId
        self.quantity = quantity
        self.total = total
        return self
