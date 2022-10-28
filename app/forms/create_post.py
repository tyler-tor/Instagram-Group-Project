from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class CreatePost(FlaskForm):
    img_url = StringField('Image', validators=[DataRequired()])
    caption = StringField('Caption', validators=[DataRequired()])
