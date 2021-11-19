from app.models import db, Order 

def seed_orders():
    order1 = Order(
        bag_name='My Bag1', userId=1
    )
    order2 = Order(
        bag_name='My Bag2', userId=1
    )
    order3 = Order(
        bag_name='My Bag3', userId=2
    )
    order4 = Order(
        bag_name='My Bag4', userId=2
    )
    order5 = Order(
        bag_name='My Bag5', userId=1
    )


    db.session.add(order1)
    db.session.add(order2)
    db.session.add(order3)
    db.session.add(order4)
    db.session.add(order5)
    # db.session.add(order6)
    # db.session.add(order7)
    # db.session.add(order8)
    
    db.session.commit()

def undo_orders():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
