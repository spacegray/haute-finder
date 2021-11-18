from .db import db
import datetime


class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(3000), nullable=True)
    imageURL = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    brandId = db.Column(db.Integer, db.ForeignKey('brands.id'), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    
    order = db.relationship('Order', backref='listings', lazy=True)
    likes = db.relationship('Like', backref='listings', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name, 
            'description': self.description,
            'imageURL': self.imageURL,
            'price': self.price,
            'userId': self.userId,
            'brand': self.brand
            # 'likes': self.likes
        }
    def to_simple_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            # 'likes': len(self.likes)
        }
    # def update(self, description=None, imageURL=None, price=None, brandId=None):
    #     self.description = description if description else self.description
    #     self.imageURL = imageURL if imageURL else self.imageURL
    #     self.price = price if price else self.price
    #     self.brandId = brandId if brandId else self.brandId
    #     return self

