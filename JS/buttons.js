/* 

Table of Contents

- Scroll Down (to About Section)

*/


// Scroll Down (to About Section)
$(".header_ellipse").click(function(){            
  $('html, body').animate({
          scrollTop: $("#aboutAnchor").offset().top
      }, 500);
});