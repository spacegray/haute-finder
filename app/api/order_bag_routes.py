from flask import Blueprint, request
from flask_login import login_required
from flask_login import current_user
from app.forms import OrderForm
from app.models import Order, User, db, Listing, order_bag
from app.forms import OrderForm

order_bag_routes = Blueprint('order_bag', __name__)


@order_bag_routes.route('/', methods=['GET'])
def get_orders():
    order_bags = Order.query.join(order_bag).all()
    return {'order_bags': [order.to_dict() for order in order_bags]}

@order_bag_routes.route('/<userId>')
def userOrders(userId):
  
    user_order_bags = Order.query.filter_by(userId = userId).join(order_bag).all()
    # userOrders =
    return {'user_order_bags': [order.to_dict() for order in user_order_bags]}
