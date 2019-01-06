$(document).ready(function() {

    // Global Variables
    var redBtnValue;
    var blueBtnValue;
    var yellowBtnValue;
    var greenBtnValue;

    var randomValues = [];

    /*
    ==============================
    Assign random values
    ==============================
    */

    // Target number assignment between 19 - 120
    $("#random-number").append(randomTargetNumber());

    // Crystal number assignment
    $("#red-btn").attr("value", randomCrystalNumber());
    redBtnValue = $("#red-btn").attr("value");
    console.log("Red Button: " + redBtnValue);

    $("#blue-btn").attr("value", randomCrystalNumber());
    blueBtnValue = $("#blue-btn").attr("value");
    console.log("First time blue button: " + blueBtnValue)
    if (blueBtnValue === redBtnValue) {
        $("#blue-btn").attr("value", randomCrystalNumber());
        blueBtnValue = $("#blue-btn").attr("value");
    };
    console.log("Second time blue button: " + blueBtnValue);

    $("#yellow-btn").attr("value", randomCrystalNumber());
    yellowBtnValue = $("#yellow-btn").attr("value");
    console.log("First time yellow button: " + yellowBtnValue)
    if (yellowBtnValue === redBtnValue || yellowBtnValue === blueBtnValue) {
        $("#yellow-btn").attr("value", randomCrystalNumber());
        yellowBtnValue = $("#yellow-btn").attr("value");
    };
    console.log("Second time yellow button: " + yellowBtnValue);

    $("#green-btn").attr("value", randomCrystalNumber());
    greenBtnValue = $("#green-btn").attr("value");
    console.log("First time green button: " + greenBtnValue)
    if (greenBtnValue === redBtnValue || greenBtnValue === blueBtnValue || greenBtnValue === yellowBtnValue) {
        $("#green-btn").attr("value", randomCrystalNumber());
        greenBtnValue = $("#green-btn").attr("value");
    };
    console.log("Second time green button: " + greenBtnValue);


    // Crystal number assignment
    
    

    /*
    ==============================
    Function declarations
    ==============================
    */

    function randomCrystalNumber() {
        return Math.floor(Math.random() * (13 - 1) + 1);
    };

    function randomTargetNumber() {
        return Math.floor(Math.random() * (121 - 19) + 19);
    };

    function checkForDupes(id, value) {
        if (id ) {
            randomCrystalNumber();
        };
    };

});