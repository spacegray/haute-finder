from .db import db


class Brand(db.Model):
    __tablename__ = 'brands'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(700), nullable=True)
    imageURL = db.Column(db.String(255), nullable=True,
                         default="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637140428/HauteFinder/Images/icons/teal-shopping-bag-icon_jxw1lh.jpg")

    listings = db.relationship('listing', backref='brand', lazy=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'imageURL': self.imageURL,
            'listings': self.listings.to_simple_dict() if self.listings else None
        }
    def to_simple_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'imageURL': self.imageURL
        }
           