from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .like import like


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    photoURL = db.Column(db.String(
        255), default="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637140235/HauteFinder/Images/icons/default_profile_photo_dm6yzf.png", nullable=True,)
    hashed_password = db.Column(db.String(255), nullable=False)

    listings = db.relationship(
        'Listing', back_populates='users')
    
    orders = db.relationship(
        'Order', back_populates='users')


    likes = db.relationship(
        'Listing', secondary=like, back_populates='users')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
     
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'photoURL': self.photoURL,
        }
