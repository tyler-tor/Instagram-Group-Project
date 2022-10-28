from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class UpdatePost(FlaskForm):
    caption = StringField('Caption', validators=[DataRequired()])
