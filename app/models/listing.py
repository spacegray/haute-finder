from .db import db
import datetime


class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description = db.Column(db.String(1500), nullable=True)
    imageURL = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    size = db.Column(db.Integer, nullable=False)
    brandId = db.Column(db.String(100), db.ForeignKey('brands.id'), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    
    likes = db.relationship('Like', backref='listing', lazy=True)
    user = db.relationship('user', backref=db.backref('listings', lazy=True))
    brand = db.relationship('brand', backref=db.backref('brands'))

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'description': self.description,
            'imageURL': self.imageURL,
            'price': self.price,
            'size': self.size,
            'brand': self.brand.to_simple_dict() if self.brand else None,
            'likes': [like.to_simple_dict() for like in self.likes]
        }
    def to_simple_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'likes': len(self.likes)
        }
    def update(self, description=None, imageURL=None, price=None,size=None, brandId=None):
        self.description = description if description else self.description
        self.imageURL = imageURL if imageURL else self.imageURL
        self.price = price if price else self.price
        self.size = size if size else self.size
        self.brandId = brandId if brandId else self.brandId
        return self

