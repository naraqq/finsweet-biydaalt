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
//daalgawar2
let request = new XMLHttpRequest();
request.onload = function () {
  let text = request.responseText;
  let myObject = JSON.parse(text);
  generateHtml(myObject.data);
};

request.open("GET", "data/company_intro.json");
request.send();
function generateHtml(arr) {
  let card = `<div class="section2-js">`;
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
//daalgawar4

let request2 = new XMLHttpRequest();
request2.onload = function () {
  let myResponse = request.responseText;
  let mySecondRes = JSON.parse(myResponse);
  generateHtml2(mySecondRes.data);
}
request2.open("GET", "data/posts.json");
request2.send();
console.log(my);

function generateHtml2(myArray) {
  let cart = `
  <div class="blog-section-js">
  `
  myArray.forEach((element) => {
    cart += `
    <div class="col-4">
              <div class="card shadow radius-rounded" style="width: 24rem">
                <img src="${element.thumbnail}" class="card-img-top" alt="..." />
                <div class="card-body p-4 card-body-hover">
                  <h4 class="card-title">${element.title}</h4>
                  <p class="card-text">
                  ${element.content}
                  </p>
                  <a
                    href="text1.html"
                    class="test1 t-deco t-color-o hover-arrow stretched-link fw-300"
                    >Learn more <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
    `
  })
  document.getElementById("blogSection").innerHTML = cart + `</div>`;
}