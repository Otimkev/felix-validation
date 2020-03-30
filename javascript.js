
//Javascript function for navbar 
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML()

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//Display the current date and time

function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var x = new Date()
document.getElementById('ct').innerHTML = x;
display_c();
 }


 //Customer registration form validation
 function formValidation(){
   var fname = document.customerRegistration.firstName
   var lname = document.customerRegistration.lastName
   var phone = document.customerRegistration.phoneNo
   var nin = document.customerRegistration.nin

   event.preventDefault()
   
   if(allLetter(fname)){
     if(lastnameValidate(lname)){
       if(allnumeric(phone)){
         if(nin_Validation(nin, 3,13)){

         }
       }
     }
   }
   return false;
 }

 //Function with a regular expression for validating fisrt Name
function allLetter(fname) {
  var letters = /^[A-Za-z]+$/;
  if (fname.value.match(letters)) {
      return true;
      
  }
  else {
      alert('First Name must have alphabet characters only');
      fname.focus();
      return false;
      
  }
}

//Function with a regular expression for validating last Name
function lastnameValidate(lname) {
  var letters = /^[A-Za-z]+$/;
  if (lname.value.match(letters)) {
      return true;
      
  }
  else {
      alert('Last Name must have alphabet characters only');
      lname.focus();
      return false;
  }
}


function allnumeric(phone)
{
  var phoneno = /^\d{10}$/;
  if(phone.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("Invalid phone number");
        return false;
        }
}

// // //Function for validating NIN
// function nin_Validation(nin, mx,my);
// {
//   var nin_len = nin.value.length;
// if (nin_len == 0 || nin_len >= my || nin_len < mx)
// {
// alert("NIN should not be empty / length be between "+mx+" to "+my);
// nin.focus();
// return false;
// }
// return true;
// }

