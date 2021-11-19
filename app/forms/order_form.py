from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Order

class OrderForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    listingId = IntegerField('listingId', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
