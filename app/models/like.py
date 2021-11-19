from .db import db


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listingId = db.Column(db.Integer, db.ForeignKey('listings.id'))

    user = db.relationship('User', back_populates='likes')
    listings = db.relationship('Listing', back_populates='likes')


    #   def to_dict(self):
    #       return {
              
    #       }    
    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.to_simple_dict() if self.user else None,
            'listing': self.listing.to_simple_dict() if self.listing else None,
        }
    # def to_simple_dict(self):
    #     return {
    #         'id': self.id,
    #         'userId': self.userId,
    #         'listingId': self.listingId,
    #     }
    # def update(self, userId=None, listingId=None, brandId=None):
    #     self.userId = userId 
    #     self.listingId = listingId 
    #     return self
