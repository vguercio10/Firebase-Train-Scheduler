// Initialize Firebase
var config = {
    apiKey: "AIzaSyB51-ySuHH_2y02KX7TccOQ1v6xqzetdks",
    authDomain: "train-times-92dc1.firebaseapp.com",
    databaseURL: "https://train-times-92dc1.firebaseio.com",
    projectId: "train-times-92dc1",
    storageBucket: "train-times-92dc1.appspot.com",
    messagingSenderId: "740815935111"
};

firebase.initializeApp(config);


var database = firebase.database();

// Button for adding trains
$("#addTrain").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var tName = $("#trainName").val().trim();
    var tDestination = $("#trainDestination").val().trim();
    var firstTTime = $("#firstTrainTime").val().trim();
    var tfrequency = $("#trainFrequency").val().trim();

    // Creates local "temporary" object for holding train data
    var newTrain = {
        name: tName,
        destination: tDestination,
        firstTrain: firstTTime,
        frequency: tfrequency,
    };

    // Uploads new train to database
    database.ref().push(newTrain);

    // Logs to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);


    // Clears all of the text-boxes
    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#firstTrainTime").val("");
    $("#trainFrequency").val("");
});
// Moment
database.ref().on("child_added", function (childSnapShot) {
    console.log(childSnapShot.val());
    
    var trainData = childSnapShot.val();
    var convertedFirstTrain = moment(trainData.firstTrain, "HH:mm");
    console.log(convertedFirstTrain);
    
    var differenceCurrentTimeTrainTime = moment().diff(moment(convertedFirstTrain), "minutes");
    console.log(differenceCurrentTimeTrainTime);
    
    var timeRemaining = differenceCurrentTimeTrainTime % trainData.frequency;
    
    var minutesAway = trainData.frequency - timeRemaining;
    
    var nextArrival = moment().add(minutesAway).format("LT");
    
    // nextArrival = moment(nextArrival).format("HH:mm");
    
    var name = childSnapShot.val().name;
    var destination = childSnapShot.val().destination;
    var firstTrain = childSnapShot.val().firstTrain;
    var frequency = childSnapShot.val().frequency;

    // Created variable to hold data and append to html
    var newRow = $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextArrival),
        $("<td>").text(minutesAway),
    );
    $("tbody").append(newRow);
});






