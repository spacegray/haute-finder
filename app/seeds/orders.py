from app.models import db, Order 
from app.models.orders import Order

def seed_orders():
    order1 = Order(
        userId=1, listingId=2, listingId=3, quantity=1, total=145
        )
    order2 = Order(
        userId=2, listingId=3, quantity=1, total=75
    )
    order3 = Order(
        userId=1, listingId=4, quantity=1, total=265
    )
    order4 = Order(
        userId=7, listingId=1, quantity=1, total=2000
    )
    order5 = Order(
        userId=1, listingId=6, listingId=7, quantity=1, total=67
    )
    order6 = Order(
        userId=1, listingId=8, listingId=11, quantity=1, total=168
    )
    order7 = Order(
        userId=1, listingId=12, listingId=10, listingId=4, quantity=1, total=1175
    )
    order8 = Order(
        userId=1, listingId=9, listingId=5, quantity=1, total=564
    )



    db.session.add(order1)
    db.session.add(order2)
    db.session.add(order3)
    db.session.add(order4)
    db.session.add(order5)
    db.session.add(order6)
    db.session.add(order7)
    db.session.add(order8)
    
    db.session.commit()
    return order
