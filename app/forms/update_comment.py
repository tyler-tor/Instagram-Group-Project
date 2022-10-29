from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class UpdateComment(FlaskForm):
    body = StringField('Body', validators=[DataRequired()])
