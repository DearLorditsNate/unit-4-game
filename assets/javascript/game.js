$(document).ready(function() {
 
    /*
    ==============================
    Global Variables
    ==============================
    */
    var redBtnValue;
    var blueBtnValue;
    var yellowBtnValue;
    var greenBtnValue;

    var targetNumber;

    var randomValues = [];

    var playerScore = 0;

    var wins = 0;
    var losses = 0;

    /*
    ==============================
    Click handlers
    ==============================
    */

    $("#red-btn, #blue-btn, #yellow-btn, #green-btn").on("click", function() {
        playerScore += parseInt(this.value);
        console.log(playerScore);
        $("#player-score").text(playerScore);
        hasWon(targetNumber, playerScore);
    });
    

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

    function hasWon(targetNumber, playerScore) {
        if (targetNumber === playerScore) {
            wins++;
            $("#wins").text(wins);
            $("#result-message").text("You won!");
            initializeGame();
        } else if (targetNumber < playerScore) {
            losses++;
            $("#losses").text(losses);
            $("#result-message").text("You lost...");
            initializeGame();
        };
    };

    function initializeGame() {
        // Reset Global Variables
        redBtnValue = 0;
        blueBtnValue = 0;
        yellowBtnValue = 0;
        greenBtnValue = 0;

        targetNumber = 0;

        randomValues = [];

        playerScore = 0;

        // Clear HTML contents
        $("#random-number, #player-score").empty();

        /*
        ==============================
        Assign random values
        ==============================
        */

        // Target number assignment between 19 - 120
        $("#random-number").append(randomTargetNumber());
        targetNumber = parseInt($("#random-number").text());


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
    };

    /*
    ==============================
    Function calls
    ==============================
    */

    initializeGame();

});