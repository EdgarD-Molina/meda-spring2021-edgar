$(document).ready(function () {

    //Keypress Function

    $("#target").keypress(function (event) {

        var KeyPressed = event.which;

        console.log("They Key pressed was: " + KeyPressed)
        
        if (KeyPressed == "h") {
            console.log("h key was pressed");
        }

        var currentMarginTop = $("#target").css("margin-top");

        currentMarginTop = parseInt(currentMarginTop)

        console.log(currentMarginTop);

        var NewMargin = (currentMarginTop + 10) + "px";

        $("#target").css("margin-top" , NewMargin);

        //Sends current text to server and gets suggestions.
        console.log("key has been pressed");

    });

});