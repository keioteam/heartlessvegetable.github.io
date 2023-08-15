/* 

Table of Contents

- Variables
- Get Values of Input Fields, Validate
 - Style Error and Submit Message
 - Validate Name
 - Validate Email
 - Validate Phone
 - Validate Message
 - Show Submission Successful Message
 - Dissapear Info After 5 Seconds
- JS Media Queries
 - Screen Size - 1921px - 2400px
 - Other Screen Sizes

*/


// Variables
const screenSize2400 = window.matchMedia('(min-width:1921px) and (max-width:2400px)');
const screenSize3000 = window.matchMedia('(min-width:2401px) and (max-width:3000px)');
const screenSize3750 = window.matchMedia('(min-width:3001px) and (max-width:3750px)');
const screenSizeLarge = window.matchMedia('(min-width:3751px)');
// var address = document.getElementById("address").value;
var errorMessage = document.getElementById("errorMessage");
var mail = document.getElementById("mail").value;
var message = document.getElementById("message").value;
var nameVar = document.getElementById("name").value;
// var phone = document.getElementById("phone").value;
var submitMessage = document.getElementById("submitMessage");
var textAddress = "Please, enter valid address.";
var textMail = "Please, enter valid email address.";
var textMessage = "Please, enter more than 140 characters in your message."
var textName = "Please, enter valid name.";
var textPhone = "Please, enter valid phone number.";
var textSuccessful = "Form submitted successfully!";


// Click to Submit Button, Get Values of Input Fields, Validate
function sendContact()
{   
    console.log('clicked');
    event.preventDefault();

    // // Style Error and Submit Message
    // errorMessage.style.padding = "10px";
    // submitMessage.style.padding = "10px";

    // // // Validate Name
    // // if(nameVar.length < 1)
    // // {
    // //     errorMessage.innerHTML = textName;
    // //     submitMessage.style.display = "none";
    // //     return false;
    // // }

    // // Validate Email
    // if(mail.indexOf("@") == -1 || mail.length < 6) {
    //     errorMessage.innerHTML = textMail;
    //     submitMessage.style.display = "none";
    //     return false;
    // }

    // // Validate Address
    // // if(address.length < 5)
    // // {
    // //     errorMessage.innerHTML = textAddress;
    // //     submitMessage.style.display = "none";
    // //     return false;
    // // }

    // // // Validate Phone
    // // if(isNaN(phone) || phone.length != 13)
    // // {
    // //     errorMessage.innerHTML = textPhone;
    // //     submitMessage.style.display = "none";
    // //     return false;
    // // }

    // // // Validate Message
    // // if(message.length <= 10) {
    // //     errorMessage.innerHTML = textMessage;
    // //     submitMessage.style.display = "none";
    // //     return false;
    // // }

    // // Show Submission Successful Message
    // errorMessage.style.display = "none";
    // submitMessage.style.display = "block";
    // submitMessage.innerHTML = textSuccessful;

    // Dissapear Info After 5 Seconds
    // setTimeout(function()
    // {
    //     $(".submitted").remove();
    //     $(".cForm").trigger("reset");
    // }, 5000
    // );

    var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });


}


// if (screenSize2400.matches) 
// {
//     function sendContact() 
//     {
//         errorMessage.style.padding = "12.5px";
//         submitMessage.style.padding = "12.5px";
//         // // Validate Name
//         // if(nameVar.length < 1)
//         // {
//         //     errorMessage.innerHTML = textName;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Validate Email
//         if(mail.indexOf("@") == -1 || mail.length < 6) {
//             errorMessage.innerHTML = textMail;
//             submitMessage.style.display = "none";
//             return false;
//         }

//         // Validate Address
//         // if(address.length < 5)
//         // {
//         //     errorMessage.innerHTML = textAddress;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // // Validate Phone
//         // if(isNaN(phone) || phone.length != 13)
//         // {
//         //     errorMessage.innerHTML = textPhone;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // // Validate Message
//         // if(message.length <= 140) {
//         //     errorMessage.innerHTML = textMessage;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Show Submission Successful Message
//         errorMessage.style.display = "none";
//         submitMessage.style.display = "block";
//         submitMessage.innerHTML = textSuccessful;
//     }
// }


// if (screenSize3000.matches) 
// {
//     function sendContact() 
//     {
//         errorMessage.style.padding = "15.6px";
//         submitMessage.style.padding = "15.6px";
//         // // Validate Name
//         // if(nameVar.length < 1)
//         // {
//         //     errorMessage.innerHTML = textName;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Validate Email
//         if(mail.indexOf("@") == -1 || mail.length < 6) {
//             errorMessage.innerHTML = textMail;
//             submitMessage.style.display = "none";
//             return false;
//         }

//         // Validate Address
//         // if(address.length < 5)
//         // {
//         //     errorMessage.innerHTML = textAddress;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // // Validate Phone
//         // if(isNaN(phone) || phone.length != 13)
//         // {
//         //     errorMessage.innerHTML = textPhone;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Validate Message
//         if(message.length <= 140) {
//             errorMessage.innerHTML = textMessage;
//             submitMessage.style.display = "none";
//             return false;
//         }

//         // Show Submission Successful Message
//         errorMessage.style.display = "none";
//         submitMessage.style.display = "block";
//         submitMessage.innerHTML = textSuccessful;
//     }
// }


// if (screenSize3750.matches) 
// {
//     function sendContact() 
//     {
//         errorMessage.style.padding = "19.5px";
//         submitMessage.style.padding = "19.5px";
//         // // Validate Name
//         // if(nameVar.length < 5)
//         // {
//         //     errorMessage.innerHTML = textName;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Validate Email
//         if(mail.indexOf("@") == -1 || mail.length < 6) {
//             errorMessage.innerHTML = textMail;
//             submitMessage.style.display = "none";
//             return false;
//         }

//         // Validate Address
//         // if(address.length < 5)
//         // {
//         //     errorMessage.innerHTML = textAddress;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // // Validate Phone
//         // if(isNaN(phone) || phone.length != 13)
//         // {
//         //     errorMessage.innerHTML = textPhone;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Validate Message
//         // if(message.length <= 140) {
//         //     errorMessage.innerHTML = textMessage;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Show Submission Successful Message
//         errorMessage.style.display = "none";
//         submitMessage.style.display = "block";
//         submitMessage.innerHTML = textSuccessful;
//     }
// }


// if (screenSizeLarge.matches) 
// {
//     function sendContact() 
//     {
//         errorMessage.style.padding = "24.3px";
//         submitMessage.style.padding = "24.3px";
//         // Validate Name
//         // if(nameVar.length < 5)
//         // {
//         //     errorMessage.innerHTML = textName;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Validate Email
//         if(mail.indexOf("@") == -1 || mail.length < 6) {
//             errorMessage.innerHTML = textMail;
//             submitMessage.style.display = "none";
//             return false;
//         }

//         // Validate Address
//         // if(address.length < 5)
//         // {
//         //     errorMessage.innerHTML = textAddress;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // // Validate Phone
//         // if(isNaN(phone) || phone.length != 13)
//         // {
//         //     errorMessage.innerHTML = textPhone;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Validate Message
//         // if(message.length <= 140) {
//         //     errorMessage.innerHTML = textMessage;
//         //     submitMessage.style.display = "none";
//         //     return false;
//         // }

//         // Show Submission Successful Message
//         errorMessage.style.display = "none";
//         submitMessage.style.display = "block";
//         submitMessage.innerHTML = textSuccessful;
//     }
// }