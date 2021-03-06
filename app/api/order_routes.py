from flask import Blueprint, request
from flask_login import login_required
from flask_login import current_user
from app.forms import OrderForm
from app.models import Order, User, db, Listing, order_bag
from app.forms import OrderForm

order_routes = Blueprint('orders', __name__)


@order_routes.route('/', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    return {'orders': [order.to_dict() for order in orders]}


@order_routes.route('/<id>/')
def orders(id):
    order = Order.query.get(id)
   

    return order.to_dict()
          


# @order_routes.route('/add/', methods=['POST'])
# # @login_required
# def add_order():
#     data = request.json
#     # form = OrderForm()
#     listing = Listing.query.get(id)
#     # form['csrf_token'].data = request.cookies['csrf_token']

#     # if form.validate_on_submit():
#         new_order = Order(
#             bag_name=form.bag_name.data,
#             userId=current_user.id,
#         )

#         db.session.add(new_order)
#         db.session.commit()

#     return new_order.to_dict()
#     # return {'errors': validation_errors_list(form.errors)}

