from app.models import db, Order, Listing


def seed_orders_bags():

    orders_list = []
    for i in range(1, 5):
        order = Order.query.get(i)
        orders_list.append(order)

    listings_list = []
    for i in range(1, 25):
        listing = Listing.query.get(i)
        listings_list.append(listing)

    count = 0
    for order in orders_list:
        for i in range(6):
            order.listings.append(listings_list[count])
            count += 1

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_orders_bags():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
