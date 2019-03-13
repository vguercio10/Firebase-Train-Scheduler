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

// Assigned the reference to the database to a variable

var database = firebase.database();

var trainName = " ";
var trainDestination = " ";
var trainFrequency = 0;
var nextArrival = 0;
var minutesAway = 0;

$("#addTrain").on("click", function(event){
    event.preventDefault();
console.log("button clicked")


employee = $("#employee-name-input").val().trim();
    role = $("#role-input").val().trim();
    start = $("#start-input").val().trim();
    rate = $("#rate-input").val().trim();

    console.log(employee);
    console.log(role);
    console.log(start);
    console.log(rate);
});
