from flask import Flask, render_template, jsonify, send_from_directory, request
import json
import pandas as pd
import numpy as np
import os
import pickle

#comment
#init app and class
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
model = pickle.load(open('heroku_app/model.pkl', 'rb'))

# Route to render index.html template
@app.route("/")
def home():
    # Return template and data
    return render_template("index.html")

@app.route('/predict/<month>/<day>/<airlineId>',methods=['GET'])
def predict2(month, day, airlineId):

    int_features = [float(month), float(day), float(airlineId)]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = round(prediction[0], 2)

    result = {}
    result['month'] = month
    result['day'] = day
    result['minutes'] = output

    return jsonify(result)

####################################
# ADD MORE ENDPOINTS
###########################################
#approute for bar chart
#############################################################
@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    return r

#main
if __name__ == "__main__":
    app.run(debug=True)