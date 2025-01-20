let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

//--------------- form -------------

const scriptURL = "https://script.google.com/macros/s/AKfycbwhItEgDoIRtwYbCMVxTLtWGsTeT1OJVHdXgvYJV9bJgDh-voQl_00tHNz2gPkDOphdlg/exec";
const form = document.getElementById("form-data");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, { method: "POST", body: formData})
  .then(response => response.text())
  .then(data => {
    alert("Success!");
    console.log('Success:', data);
    form.reset();
  })
  .catch(error => {
    alert("Error!");
    console.error("Error:", error);
  });
});

const acc = document.getElementsByClassName("accordian");
var i;

for (i=0; i<acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block"){
      panel.style.display ="none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ---------- hidden footer content
let contentBox = document.getElementById("footer-content");

function showMe(id, id2) {  
  contentBox.classList.add("show");
  document.getElementById(id).classList.add("active");
  document.getElementById(id2).classList.remove("active");
}