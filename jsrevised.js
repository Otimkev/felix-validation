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
  let firstname = document.getElementById('fname1');
  let lastname = document.getElementById('lname1');
  let phoneNo = document.getElementById('Phone1');
  let nin = document.getElementById('nin1');


  if(firstname.value.length == 0){
    ('fill all input fields')
    alert('fill please')
    return false
  };

  //loop
  if(inputAlphabet(firstname)){
    if(inputAlphabet2(lastname)){
      if(textNumeric(phoneNo)){
        return true
      }
    }
  }
return false
}

function inputAlphabet(inputtext) {
  var alphaExp = /^[a-zA-Z]+$/;
  if (inputtext.value.match(alphaExp)) {
  return true;
  } else {
  alert('alphabet characters only in first name')
  //alert(alertMsg);
  inputtext.focus();
  return false;
  }
  }

  function inputAlphabet2(inputtext) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
    return true;
    } else {
    alert('alphabet character only in last name')
    //alert(alertMsg);
    inputtext.focus();
    return false;
    }
    }

    function textNumeric(inputtext) {
      var numericExpression = /^[0-9]+$/;
      if (inputtext.value.match(numericExpression)) {
      return true;
      } else {
      alert('please input numbers only in phone number field')
      inputtext.focus();
      return false;
      }
      }
