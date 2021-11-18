from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    photoURL = db.Column(db.String(
        255), nullable=True, default="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637140235/HauteFinder/Images/icons/default_profile_photo_dm6yzf.png")
    hashed_password = db.Column(db.String(255), nullable=False)

    
    likes = db.relationship('Like', backref='users', lazy=True)
    orders = db.relationship('Order', backref='users', lazy=True)
    listings = db.relationship('Listing', backref='users', lazy=True)

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
            'profileURL': self.profileURL,
            'listings': [listing.to_simple_dict() for listing in self.listings],
            'likes': [like.to_simple_dict() for like in self.likes],
            'orders': [order.to_simple_dict() for order in self.orders]
        }
    
    def to_simple_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'profileURL': self.photoURL, 
            'likes': self.likes,
            'orders': self.orders
        }
    
    def update(self, first_name=None, last_name=None, username=None, email=None, photoURL=None, password=None, **kwargs):
        self.username = username if username else self.username
        self.email = email if email else self.email
        self.photoURL = photoURL if photoURL else self.photoURL
        self.password = password if password else self.password
        return self
    
    @classmethod
    def create(cls, username, email, photoURL, hashed_password):
        user = cls(username=username, email=email, photoURL=photoURL, hashed_password=hashed_password)
        db.session.add(user)
        db.session.commit()
        return user

