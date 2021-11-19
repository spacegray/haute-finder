from app.models import db, User, Listing 


def seed_likes():
    user = User.query.get(1)

    for i in range(1, 10):
        listing = Listing.query.get(i)
        user.likes.append(listing)
        db.session.commit()

    
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_likes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
