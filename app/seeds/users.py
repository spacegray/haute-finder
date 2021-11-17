from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637140235/HauteFinder/Images/icons/default_profile_photo_dm6yzf.png', listingId=1)
    sara = User(
        username='sara', email='sara@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190101/HauteFinder/Images/userProfilePhotos/sara_mid6oz.jpg')
    jessie = User(
        username='jessie', email='jessie@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637140235/HauteFinder/Images/icons/default_profile_photo_dm6yzf.png')
    jason = User(
        username='jason', email='jason@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637140235/HauteFinder/Images/icons/default_profile_photo_dm6yzf.png')
    gabriel = User(
        username='gabriel', email='gabriel@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637140235/HauteFinder/Images/icons/default_profile_photo_dm6yzf.png')
    josh = User(
        username='josh', email='josh@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637140235/HauteFinder/Images/icons/default_profile_photo_dm6yzf.png')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
