from app.models import db, Order 

def seed_orders():
    order1 = Order(
        bag_name='My Bag1', userId=1
    )
    order2 = Order(
        bag_name='My Bag2', userId=2
    )
    order3 = Order(
        bag_name='My Bag3', userId=3
    )
    order4 = Order(
        bag_name='My Bag4', userId=4
    )
    order5 = Order(
        bag_name='My Bag5', userId=5
    )
    order6 = Order(
        bag_name='My Bag6', userId=6
    )
    order7 = Order(
        bag_name='My Bag7', userId=7
    )
    order8 = Order(
        bag_name='My Bag8', userId=8
    )
    order9 = Order(
        bag_name='My Bag9', userId=9
    )
    order10 = Order(
        bag_name='My Bag10', userId=10
    )


    db.session.add(order1)
    db.session.add(order2)
    db.session.add(order3)
    db.session.add(order4)
    db.session.add(order5)
    db.session.add(order6)
    db.session.add(order7)
    db.session.add(order8)
    db.session.add(order9)
    db.session.add(order10)
    
    db.session.commit()

def undo_orders():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
