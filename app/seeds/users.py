from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637140235/HauteFinder/Images/icons/default_profile_photo_dm6yzf.png')
    sara = User(
        username='sara', email='sara@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190101/HauteFinder/Images/userProfilePhotos/sara_mid6oz.jpg')
    jessie = User(
        username='jessie', email='jessie@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190101/HauteFinder/Images/userProfilePhotos/jessie_ebzs5w.jpg')
    jason = User(
        username='jason', email='jason@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190101/HauteFinder/Images/userProfilePhotos/Jason_cmlkw4.jpg')
    gabriel = User(
        username='gabriel', email='gabriel@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190101/HauteFinder/Images/userProfilePhotos/gabriel_h0vzrb.jpg')
    josh = User(
        username='josh', email='josh@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190101/HauteFinder/Images/userProfilePhotos/Josh_ctdlsm.jpg')
    jennifer = User(
        username='jennifer', email='jennifer@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190101/HauteFinder/Images/userProfilePhotos/Jason_cmlkw4.jpg')
    alicia = User(
        username='alicia', email='alicia@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190101/HauteFinder/Images/userProfilePhotos/alicia_vsr4gi.jpg'
    )
    jade = User(
        username='jade', email='jade@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637192201/HauteFinder/Images/userProfilePhotos/jade_ufaoa7.jpg'
    )
    adrian = User(
        username='adrian', email='adrian@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637192154/HauteFinder/Images/userProfilePhotos/adrian_twqdur.jpg'
    )
    elijah = User(
        username='elijah', email='elijah@aa.io', password='password', photoURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637192154/HauteFinder/Images/userProfilePhotos/elijah_nsrogp.jpg'
    )

    db.session.add(demo)
    db.session.add(sara)
    db.session.add(jessie)
    db.session.add(jason)
    db.session.add(gabriel)
    db.session.add(josh)
    db.session.add(jennifer)
    db.session.add(alicia)
    db.session.add(jade)
    db.session.add(adrian)
    db.session.add(elijah)
    


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
