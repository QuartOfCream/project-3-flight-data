# project-3-flight-data
Final Project for SMU Data Analytics Bootcamp
https://airline-delay-generator.herokuapp.com/


Technical Analysis Project Three
	Preprocessing is without a doubt one of the most important processes in utilizing machine learning algorithms. We chose a large data set, from the Bureau of Transportation Statistics (BTS), with all kinds of data concerning domestic flights in the United States. First we came up with a question of what we wanted to answer with our data – that answer was “How long will I have to wait for a flight on any given day?” Past data isn’t as useful as future data, so to do that, we used supervised machine learning.
	
	First, we put the data into a database, S3, which is hosted by Amazon Web Services (AWS). We read our .csv directly from S3. Afterwards, we had to standardize the data. Since we were trying to achieve the question above, we primarily needed – which carrier, what date, and how much delay. We did our preprocessing in python inside of .ipynb files using jupyter lab. After grouping the data by what we needed as a dataframe, we did a hot reformat, label-encoding the data. After finding unique carriers with .unique(), we needed to create labels for the linear regression formula. All of the carriers were assigned a number and then reformatted into a label enconded dataframe. Then, for our model to work, we had to assign x and y variables. These variables were taken from the previously mentioned dataframe. X was a list of month, day of month, and unique carrier. Y was the carrier delay. This format mimics the final result. After x and y were assigned, we trained the model using sklearn’s train_test_split. We assigned that result to the linear regression
function, executed .fit to train it, and then we use those results as the final datapoint. The only next step is to reformat the data into a pickle file.

	The mean squared error (MSE) was 94.077%. The R-Squared value was 0.011999. These aren’t particularly good results. Some potential reasons for these data scores are as follows: perhaps we didn’t normalize or standardize as many columns as necessary. We could have had too many null values. The more null values, the weaker the fit to train. We could have had low effect, meaning that we had too many unnecessary columns. We did use .groupby() and brackets after the dataframe to separate only the columns we needed, but perhaps there was some extraneous data somewhere. Perhaps some columns should have been combined. This would have helped with principle component analysis (PCA), which, although an unsupervised technique, still applies here. We had a multivariate data table which we could have set into smaller summary indices in order to observe trends, jumps, clusters, and outliers. Perhaps we didn’t standardize some columns that had outliers, perhaps major since the multivariate data table was so large, using MCT (mean, range, standard deviation, etc.). It’s even possible that a different regression type would have worked better – such as polynomial regression. We could have used model comparison to determine which algorithm gave us the strongest result – but we had no time for this. We knew from the beginning that we needed to find the coefficient and slope to see how it affected the target variables. We did use dummy variables, however. As we can see from the model below, sometimes simple is better. Too much technology and requirements leads to anarchy and the simplest answer is close to certainty and close to agreeme

	![Picture1forReadme](https://user-images.githubusercontent.com/78526332/133300574-e3c998f1-2663-451d-9c7e-a418543619b3.jpg)


In effect – not enough preprocessing. However, given the time that we were given, we achieved an excellent result. Had we had more time, we could have done the aforementioned steps. Preprocessing is the bulk of machine learning work.
To deploy, we used the following model.

	![FlowChartReadme](https://user-images.githubusercontent.com/78526332/133300805-e10303fb-0ab0-4015-9728-9894d7666b15.jpg)
  
After finishing with the machine learning, we created a flask app using python to depickle the pickled file with our data inside of it.
model = pickle.load(open('model.pkl', 'rb'))

The rest of the flask app was to create routes to render the index.html template and other data. We also added headers to both force latest IE rendering engine or Chrome Frame, and also to cache the rendered page for 10 minutes. 
For Heroku to run, we simply needed a procfile to run gunicorn. More information on packages we used can be found in the requirements.txt file.
For the JavaScript, we needed to create a dropdown menu for the user to enter in the information. We created variables for each of the drop down options, menu, date and airline using d3.select and then using a # to call the ID element. After calculating what the user entered, we used resultDiv.text to provide a text sentence on the actual page for the user to read.

The index.html file used plenty of inline CSS, rather than a styles.css file. After importing d3 to the HTML file, we created a title and then an area where the user could enter in their desired information using the aforementioned JavaScript. We used a dropdown menu with all dates entered manually using <option value =”7”>July</option> for example. The same dropdown technique using option values was used for the date and the airline. A button was created, of course, and then the final event happened.
<div id="prediction-result" Class="results">

The only remaining things were adding some information to the bottom of the page.

