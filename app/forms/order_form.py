from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class OrderForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    listingId = IntegerField('listingId', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
