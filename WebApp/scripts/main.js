// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

function DisplayError(){
  var errorMessageElement = document.getElementById("sendErrorMessage");
  errorMessageElement.innerHTML = "Form is not working. Please send me a regular email at asger.thyregod@gmail.com.";
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

var ageValue = document.getElementById("ageValue");
ageValue.innerHTML = getAge('1994-04-26');

var ageValue = document.getElementById("profesionalValue");
ageValue.innerHTML = getAge('2018-08-01');

// Add your javascript here
