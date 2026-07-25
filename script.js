const homeBtn = document.getElementById("home-page-button");
const menuBtn = document.getElementById("menu-button");
const aboutBtn = document.getElementById("about-us-button");

function showPage(id){
  document.querySelectorAll("main section").forEach(section => {
    section.hidden = true;
  });

  document.getElementById(id).hidden = false;
}

homeBtn.onclick = () => showPage("home-page");
menuBtn.onclick = () => showPage("menu-page");
aboutBtn.onclick = () => showPage("about-page");

