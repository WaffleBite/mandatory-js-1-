//H1 titel

let headerTitle = document.getElementsByTagName("H1");

headerTitle[0].setAttribute("style", "color: red"); 
headerTitle[0].textContent = "Fruits & Vegetables Corp";

//meny

let link = document.getElementsByTagName("li");

link[2].firstChild.textContent="Vegetables";
link[2].firstChild.setAttribute("href", "#vegetables");

var mainContent = document.getElementsByTagName("section");

let first = mainContent[0];
let second = mainContent[1];
let holder = first.parentElement;

holder.removeChild(first);
holder.removeChild(second);
holder.appendChild(second);
holder.appendChild(first);


//about titel

let about = document.getElementById("about");
about.textContent="";

let newParagraph = document.createElement("p");
newParagraph.textContent = "We're the best in fruits & vegetables";

about.appendChild(newParagraph);

let aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About";

var mainContent = document.getElementById("main");
about.insertBefore(aboutTitle, newParagraph);

//kontakt titel

let contact = document.getElementById("contact");

let contactTitle = document.createElement("h2");
contactTitle.textContent = "Contact";

contact.appendChild(contactTitle); 

let contactParagraph = document.getElementsByTagName("p")

contact.insertBefore(contactTitle, contactParagraph[1]);

//ändra td till th

let firstTh = document.createElement("th");
let secondTh = document.createElement("th");

let tr = document.querySelectorAll("thead > tr");
let th = document.querySelectorAll("thead > tr > td");

for (let i = 0; i < th.length; i++) {
    tr[0].removeChild(th[i]);
    }
    tr[0].appendChild(firstTh).textContent = "Name";
    tr[0].appendChild(secondTh).textContent = "Email";

//title i head

document.title = "Fruits & Vegetables";

//lägg till main.css

let head = document.getElementsByTagName("head")[0];

let style = document.createElement("link");
style.href = "main.css";
style.type = "text/css";
style.rel = "stylesheet";

head.append(style);