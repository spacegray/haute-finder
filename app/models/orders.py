from .db import db

class Orders(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listingId = db.Column(db.Integer, db.ForeignKey('listings.id'))
    quantity = db.Column(db.Integer, nullable=True, default=0)
    price = db.Column(db.Float, nullable=True, default=0)

    user = db.relationship('User', backref=db.backref('orders', lazy=True))
    listing = db.relationship('Listing', backref=db.backref('orders', lazy=True))


    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.to_simple_dict() if self.user else None,
            'listing': self.listing.to_simple_dict() if self.listing else None,
            'quantity': self.quantity,
            'price': self.price
        }
    
    def to_simple_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'listingId': self.listingId,
            'quantity': self.quantity,
        }

    def update(self, userId=None, listingId=None, quantity=None, price=None):
        self.userId = userId
        self.listingId = listingId
        self.quantity = quantity
        self.price = price
        return self
