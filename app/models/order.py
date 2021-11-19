from .db import db
import datetime
from .order_bag import order_bag

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    bag_name = db.Column(db.Text, default='My Bag', nullable=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())
    
    # users = db.relationship('User', back_populates='orders')
    # listings = db.relationship('Listing', back_populates='orders')

    # listings = db.relationship('Listing',  
    #     secondary=order_bag, back_populates='orders')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'quantity': self.quantity,
        }
    
    # def to_simple_dict(self):
    #     return {
    #         'id': self.id,
    #         'userId': self.userId,
    #         'listingId': self.listingId,
    #         'quantity': self.quantity,
    #     }

    # def update(self, userId=None, listingId=None, quantity=None, total=None):
    #     self.userId = userId
    #     self.listingId = listingId
    #     self.quantity = quantity
    #     self.total = total
    #     return self
