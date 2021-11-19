from flask import Blueprint, request
from app.forms import OrderForm
from app.models import Order, Listing, User
from app.forms import OrderForm

order_routes = Blueprint('orders', __name__)


@order_routes.route('/', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    return {'orders': [order.to_dict() for order in orders]}


@order_routes.route('/user/<userId>/')
def orders(userId):
    orders = Order.query.filter_by(userId=userId)
    return {'orders': [order.to_dict() for order in orders]}
