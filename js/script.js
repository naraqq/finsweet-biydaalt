// Use window.addEventListener("scroll",) Event listener.
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount

// $(function () {
//   var header = $("#navbar_fix");
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     console.log(scroll);
//     if (scroll >= 1) {
//       header.removeClass("mypositionfixed").addClass("navbar-fixed");
//     } else {
//       header.removeClass("navbar-fixed").addClass("mypositionfixed");
//     }
//     if (scroll >= 640) {
//       header.removeClass("navbar-fixed").addClass("mypositionfixed");
//     } else {
//       header.removeClass("mypositionfixed").addClass("navbar-fixed");
//     }
//   });
// });

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
    
    // mainNav.classList.add("myposition-fixed");
  }
  //   if ((e.target.scrollingElement.scrollTop = 650)) {
  //     mainNav.classList.add("navbar-fixed");
  //   } else {
  //     add("navbar-fixed");
  //     mainNav.classList.add("myposition-fixed");
  //   }
}
// var scrollElm = document.scrollingElement;
// scrollElm.scrollTop = 0;

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