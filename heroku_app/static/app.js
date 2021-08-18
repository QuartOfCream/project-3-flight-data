function optionChanged(newOrigin) {
    // Fetch new data each time a new sample is selected
    getPredictions(newOrigin);
  }

  // get form field values console write line to make sure right data then pass to predict on flask app then flask app return json version of predictions
  function getPredictions()