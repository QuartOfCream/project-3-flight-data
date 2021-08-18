// get form field values console write line to make sure right data then pass to predict on flask app then flask app return json version of predictions
function getPredictions() {
    
    var dropdownMonth = d3.select("#month").node().value;
    var dropdownDay = d3.select("#day").node().value;
    var dropdownAirline = d3.select("#airline").node().value;

    console.log(dropdownMonth);

    d3.json(`/predict/${dropdownMonth}/${dropdownDay}/${dropdownAirline}`).then((data) => {
        console.log(data);

        var resultDiv = d3.select("#prediction-result");

        resultDiv.text(data.message);
    });
}

function optionChanged() {
    // Fetch new data each time a new sample is selected
    getPredictions();
}
