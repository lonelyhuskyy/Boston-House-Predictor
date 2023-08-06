from . import db
from sqlalchemy.sql import func

class contactDetails(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(500))
    data = db.Column(db.String(500))
    data = db.Column(db.String(100))
    data = db.Column(db.String(10000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())