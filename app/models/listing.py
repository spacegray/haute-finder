from .db import db
import datetime
from .like import like
from .order_bag import order_bag


class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    imageURL = db.Column(db.Text, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    
    # sellerId = db.relationship('User', back_populates='listings')

    users = db.relationship('User', back_populates='listings')

    orders = db.relationship('Order', 
        secondary=order_bag,
        back_populates='listings')

    users = db.relationship('User', 
        secondary=like,
        back_populates='listings')

   
    # user = db.relationship('User', back_populates='listings')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'name': self.name, 
            'description': self.description,
            'imageURL': self.imageURL,
            'price': self.price,
            # 'likes': self.likes
        }
    # def to_simple_dict(self):
    #     return {
    #         'id': self.id,
    #         'description': self.description,
    #         # 'likes': len(self.likes)
    #     }
    # def update(self, description=None, imageURL=None, price=None, brandId=None):
    #     self.description = description if description else self.description
    #     self.imageURL = imageURL if imageURL else self.imageURL
    #     self.price = price if price else self.price
    #     self.brandId = brandId if brandId else self.brandId
    #     return self

