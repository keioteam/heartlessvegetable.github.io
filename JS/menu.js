/* 

Table of Contents

- Create Effect for Hamburger Menu Lines
- Transform Menu after Click

*/


// Create Effect for Hamburger Menu Lines
const header = document.querySelector (".header");
const menuIcon = document.querySelector (".hamburgerMenu");
var headerSection = document.getElementById("headerSection");

menuIcon.addEventListener("click", () => 
{
    header.classList.toggle("changeMenu");
});


// Transform Menu after Click 
$(document).ready(function() 
{
    $(".phoneLink").on("click", function() 
    {
        $(".header").removeClass("changeMenu");
    });
}); 