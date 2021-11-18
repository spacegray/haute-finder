from .db import db


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listingId = db.Column(db.Integer, db.ForeignKey('listings.id'))
    brandId = db.Column(db.Integer, db.ForeignKey('brands.id'))

    
    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.to_simple_dict() if self.user else None,
            'listing': self.listing.to_simple_dict() if self.listing else None,
            'brand': self.brand.to_simple_dict() if self.brand else None
        }
    def to_simple_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'listingId': self.listingId,
            'brandId': self.brandId
        }
    def update(self, userId=None, listingId=None, brandId=None):
        self.userId = userId 
        self.listingId = listingId 
        self.brandId = brandId 
        return self