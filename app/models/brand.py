from .db import db


class Brand(db.Model):
    __tablename__ = 'brands'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(700), nullable=True)
    imageURL = db.Column(db.String(255), nullable=True)
    
    listing=db.relationship('Listing', backref='brands')
    likes = db.relationship('Like', backref='brands')
     

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'imageURL': self.imageURL,
            'listings': self.listingId.to_simple_dict() if self.listings else None
        }
    def to_simple_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'imageURL': self.imageURL,
            'listing': self.listingId
        }
           