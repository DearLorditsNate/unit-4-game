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
    randomValues.push(redBtnValue);

    $("#blue-btn").attr("value", randomCrystalNumber());
    blueBtnValue = $("#blue-btn").attr("value");
    for (var i = 0; i < randomValues.length; i++) {
        while (blueBtnValue === randomValues[i]) {
            $("#blue-btn").attr("value", randomCrystalNumber());
            blueBtnValue = $("#blue-btn").attr("value");
        };
    };
    randomValues.push(blueBtnValue);

    $("#yellow-btn").attr("value", randomCrystalNumber());
    yellowBtnValue = $("#yellow-btn").attr("value");
    for (var i = 0; i < randomValues.length; i++) {
        while (yellowBtnValue === randomValues[i]) {
            $("#yellow-btn").attr("value", randomCrystalNumber());
            yellowBtnValue = $("#yellow-btn").attr("value");
        };
    };
    randomValues.push(yellowBtnValue);

    $("#green-btn").attr("value", randomCrystalNumber());
    greenBtnValue = $("#green-btn").attr("value");
    for (var i = 0; i < randomValues.length; i++) {
        while (greenBtnValue === randomValues[i]) {
            $("#green-btn").attr("value", randomCrystalNumber());
            greenBtnValue = $("#green-btn").attr("value");
        };
    };
    randomValues.push(greenBtnValue);

    console.log("randomValues array: " + randomValues);
    

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

});