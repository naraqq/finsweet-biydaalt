window.addEventListener("scroll", myFunction);
let mainNav = document.getElementById("navbar_fix");
function myFunction(e) {
  let scrolled = e.target.scrollingElement.scrollTop;
  if (scrolled <= 600) {
    mainNav.classList.add("navbar-fixed");
    mainNav.classList.remove("nav_anime");
  } else {
    mainNav.classList.add("myposition-fixed");
    mainNav.classList.remove("navbar-fixed");
    mainNav.classList.add("nav_anime");
  }
}
// page iig refresh hiihed ehlel hesegt butsaana
var scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;

let request = new XMLHttpRequest();
request.onload = function () {
  let text = request.responseText;
  let myObject = JSON.parse(text);
  generateHtml(myObject.data);
};

request.open("GET", "data/company_intro.json");
request.send();
function generateHtml(arr) {
  let card = `<div style="display : flex">`;
  arr.forEach((e) => {
    card += `
        <div class="col-4 t-color-b">
                <img class="img-section2" src="${e.thumbnail}" alt="img" />
                <h3 class="my-4">${e.title}</h3>
                <p>
                  ${e.content}
                </p>
                <a
                  class="t-deco t-color-o hover-arrow fw-300"
                  href="Services.html"
                  >Learn More <i class="bi bi-arrow-right"></i
                ></a>
              </div>`;
  });
  document.getElementById("test33").innerHTML = card + `</div>`;
}
// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener

// Define Play button variable

// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request

// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code

// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request

/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create
