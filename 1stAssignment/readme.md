1st task => create an list item name "hire me"

let element = document.createElement("li");
element.innerHTML = "hire me";
let p = document.querySelector("header nav ul");
p.appendChild(element);

2nd task => 

let b = document.querySelector(".search-field input");
b.placeholder = "Search my project";

3rdtask =>

let c = document.querySelectorAll(".hero-left-section p span");
c[1].innerHTML = "an Employee";
c[2].innerHTML = "iNeuron intelligence pvt ltd";

4th task =>

document.querySelector(".hero-right-section img").src = "ig1.jpg";
<!-- // document.getElementById("ig1").src = "ig1.jpg"; -->

5th task =>

let d = document.createElement("button");
d.innerHTML = "Support Me";
document.querySelector(".hero-right-section-btns ").appendChild(d);


