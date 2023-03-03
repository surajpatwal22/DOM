let element = document.createElement("li");
element.innerHTML = "hire me";
let p = document.querySelector("header nav ul");
p.appendChild(element);

let b = document.querySelector(".search-field input");
b.placeholder = "Search my project";

let c = document.querySelectorAll(".hero-left-section p span");
c[1].innerHTML = "an Employee";
c[2].innerHTML = "iNeuron intelligence pvt ltd";

document.querySelector(".hero-right-section img").src = "ig1.jpg";
// document.getElementById("ig1").src = "ig1.jpg";

let d = document.createElement("button");
d.innerHTML = "Support Me";
document.querySelector(".hero-right-section-btns ").appendChild(d);

