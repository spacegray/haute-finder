from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Listing

class ListingForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    imageURL = StringField('imageURL', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    