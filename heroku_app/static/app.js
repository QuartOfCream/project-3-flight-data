// get form field values console write line to make sure right data then pass to predict on flask app then flask app return json version of predictions
function getPredictions() {
    
    var dropdownMonth = d3.select("#month").node().value;
    var dropdownDay = d3.select("#day").node().value;
    var dropdownAirline = d3.select("#airline").node().value;

    d3.json(`/predict/${dropdownMonth}/${dropdownDay}/${dropdownAirline}`).then((data) => {
        var resultDiv = d3.select("#prediction-result");

        var airlineName = d3.select("#airline option:checked").text();
        var monthName = d3.select("#month option:checked").text();

        resultDiv.text(`The predicted delay for ${airlineName} on ${dropdownDay} ${monthName} is ${data.minutes} minutes.`);
    });
}

function optionChanged() {
    // Fetch new data each time a new sample is selected
    getPredictions();
}
