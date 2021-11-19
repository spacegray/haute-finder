from flask import Blueprint, request
from app.forms import OrderForm
from app.models import Order, db, Listing 

order_routes = Blueprint('order', __name__)

@order_routes.route('/user/<userId>/')
def orders(userId):
    
    orders = Order.query.filter_by(userId=userId)
    return {'orders': [order.to_dict() for order in orders]}