/* 

Table of Contents

- Click on Ground Mars
- Click on Launching Mars
- Click on Orbit Mars

*/


// Click on Ground Mars
$(document).ready(function() {
    $(".groundMars").on("click", function() {
        $(".ground").show();
        $(".groundMars").css("color", "#b590d8");
        $(".launching").hide();
        $(".launchingMars").css("color", "#ffffff");
        $(".orbit").hide();
        $(".orbitMars").css("color", "#ffffff");
    });
}); 


// Click on Launching Mars
$(document).ready(function() {
    $(".launchingMars").on("click", function() {
        $(".ground").hide();
        $(".groundMars").css("color", "#ffffff");
        $(".launching").show();
        $(".launchingMars").css("color", "#b590d8");
        $(".orbit").hide();
        $(".orbitMars").css("color", "#ffffff");
    });
}); 


// Click on Orbit Mars
$(document).ready(function() {
    $(".orbitMars").on("click", function() {
        $(".ground").hide();
        $(".groundMars").css("color", "#ffffff");
        $(".launching").hide();
        $(".launchingMars").css("color", "#ffffff");
        $(".orbit").show();
        $(".orbitMars").css("color", "#b590d8");
    });
}); 