// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of the menu
let showMenu = false;

// Hide nav bar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;
  }
}

// Youtube Vids Handler
$(".close").hide();
$(".playbutton-icon").click(function() {
  var video =
    '<iframe src="' +
    $(this)
      .parent()
      .parent()
      .find(".thumbnails")
      .attr("data-video") +
    '"></iframe>';

  $(this)
    .parent()
    .parent()
    .find(".thumbnails")
    .hide();
  $(this)
    .parent()
    .hide();
  $(this)
    .parent()
    .parent()
    .find(".yt-container")
    .html(video);

  $(this)
    .parent()
    .parent()
    .find(".close")
    .show();
});

$(".close").click(function() {
  $(this)
    .parent()
    .find("img, .overlay")
    .show();
  $(this)
    .parent()
    .find(".yt-container")
    .empty();
  $(this).hide();
});
