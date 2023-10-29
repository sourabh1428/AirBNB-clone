
const ipbox=document.querySelectorAll(".ip-box");
const ipboxp=document.querySelectorAll(".ipboxp");

ipbox.forEach(element => {
  element.addEventListener("click",(e)=>removeLabels(e.target));
});


function removeLabels(inputElement) {
  var parentDiv = inputElement.parentElement;
  var labelI = parentDiv.querySelector("i");
  var labelP = parentDiv.querySelector("p");

  // Check if the labels exist and remove or hide them
  if (labelI && labelI.innerText!=="Location" && labelI.innerText!=="Guests") {
      labelI.style.display = "none"; // Hide the "i" element
  }
  if (labelP) {
      labelP.style.display = "none"; // Hide the "p" element
  }
}


const dateInput = document.getElementById('dateInput');

dateInput.addEventListener('focus', () => {
    // When the input is focused, clear the placeholder text
    dateInput.setAttribute('placeholder', '');
});

dateInput.addEventListener('blur', () => {
    // When the input loses focus, restore the placeholder text
    dateInput.setAttribute('placeholder', 'Select a date');
});


const locationip=document.getElementById("locationip");
const guestip=document.getElementById("guestip");
const check=document.querySelectorAll("#dateInput");

document.getElementById("searchip").addEventListener("click",function(){
  console.log("hue");
  console.log(locationip.value);
  let location=locationip.value;
  let guest=guestip.value;
  let checkin=check[0].value;
  let checkout=check[1].value;
  localStorage.setItem('location', location);
  localStorage.setItem('guest', guest);
  localStorage.setItem('checkin', checkin);
  localStorage.setItem('checkout', checkout);
  window.location.href = 'search.html';
});

