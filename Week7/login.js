$(document).ready(function () {

    $("#login").click(function (event) {

        event.preventDefault();

       var username =  $("#username").val();
       var password =  $("#password").val();

       if (username === "student") {
           
        if (password === "abc123") {

            console.log("Thank you for logging in");
            window.location.replace("http://www.google.com/");
        } else {
            console.log("wrong password!");
        }

       } else {
           console.log("Username is incorrect.");
       }

    //    console.log(password);

        // console.log("Button Click");

    });
});

