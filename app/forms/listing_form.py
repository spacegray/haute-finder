from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length
from app.models import Listing

class ListingForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(min=2, max=50)])
    description = StringField('description', validators=[DataRequired(), Length(min=3, max=3000)])
    imageURL = StringField('imageURL', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    