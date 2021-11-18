# from .db import db
# import datetime

# class shoppingCart(db.Model):
#     __tablename__ = 'shoppingCart'

#     id = db.Column(db.Integer, primary_key=True)
#     userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     listingId = db.Column(db.Integer, db.ForeignKey('listings.id'))
#     quantity = db.Column(db.Integer, nullable=True, default=0)
#     total = db.Column(db.float, nullable=True, default=0)
#     created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
#     updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

#     user = db.relationship('User', backref=db.backref('shoppingCart', lazy=True))
#     listing = db.relationship('Listing', backref=db.backref('shoppingCart', lazy=True))

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'user': self.user,
#             'listing': self.listing,
#             'quantity': self.quantity,
#             'total': self.total,
#             'listing': self.listing.to_dict()
#         }