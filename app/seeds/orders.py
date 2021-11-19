from app.models import db, Order 

def seed_orders():
    order1 = Order(
        userId=1, listingId=2, quantity=1, total=145, orderNum=123
    )
    order2 = Order(
        userId=2, listingId=3, quantity=1, total=75, orderNum=124
    )
    order3 = Order(
        userId=1, listingId=4, quantity=1, total=265, orderNum=126
    )
    
    # order1 = Order(
    #     userId=1, listingId=2, quantity=1, total=145, orderNum=1234
    #     )
    # order2 = Order(
    #     userId=2, listingId=3, quantity=1, total=75, orderNum=1235
    # )
    # order3 = Order(
    #     userId=1, listingId=4, quantity=1, total=265, orderNum=1234
    # )
    # order4 = Order(
    #     userId=7, listingId=1, quantity=1, total=2000, orderNum=1237
    # )
    # order5 = Order(
    #     userId=1, listingId=6, quantity=1, total=67, orderNum=1234
    # )
    # order6 = Order(
    #     userId=1, listingId=8, quantity=1, total=168, orderNum=1234
    # )
    # order7 = Order(
    #     userId=1, listingId=12, quantity=1, total=1175, orderNum=1234
    # )
    # order8 = Order(
    #     userId=1, listingId=9, quantity=1, total=564, orderNum=1234
    # )



    db.session.add(order1)
    db.session.add(order2)
    db.session.add(order3)
    # db.session.add(order4)
    # db.session.add(order5)
    # db.session.add(order6)
    # db.session.add(order7)
    # db.session.add(order8)
    
    db.session.commit()

def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()
