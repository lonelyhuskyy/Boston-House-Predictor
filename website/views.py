from flask import Blueprint,render_template,request, url_for as flask_url_for, jsonify,flash
import numpy as np
from .models import contactDetails
from . import db
from werkzeug.datastructures import MultiDict
import pickle,json

views = Blueprint('views', __name__)

model = pickle.load(open('website/model.pkl','rb'))

@views.route('/')
def home():
    return render_template("home.html")


@views.route('/predict',methods=['POST','GET'])
def predict():
    if request.method == 'POST':
        features = [float(x) for i, x in enumerate(request.form.to_dict().values()) if i not in [1, 3, 7, 8, 11]]
        final=[np.array(features)]
        print(final)
        prediction=model.predict(final)
        # output='{0:.{1}f}'.format(prediction[0],2)
        output= prediction[0]
        result= float(output)*1000
        output= str(result)
        return render_template("predict.html",pred= output)




@views.route('/contact',methods=['POST','GET'])
def contact():
    if request.method == 'POST':

        full_name = request.form.get("nameInput")
        email = request.form.get("emailInput")
        phone_num = request.form.get("phoneInput")
        msg = request.form.get("msgInput")

        if not full_name or not email:
            flash('All Fields are required!', category='error')
        else:
            new_contact = contactDetails(data=full_name)
            new_phone = contactDetails(data=phone_num)
            new_email = contactDetails(data=email)
            new_msg = contactDetails(data=msg)
            db.session.add(new_email)
            db.session.add(new_contact)
            db.session.add(new_phone)
            db.session.add(new_msg)
            db.session.commit()
            flash('Thanks for Subscribing!', category='success')

    return render_template("contact.html")

@views.route('/about')
def about():
    return render_template("about.html")