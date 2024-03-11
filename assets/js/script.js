// Function to show an element
function showElement(element) {
  // Remove old animation classes if present
  element.classList.remove("animate__fadeOut");

  // Add animation class to fade in
  element.classList.add("animate__animated", "animate__fadeIn");
}

// Function to hide an element
function hideElement(element) {
  // Remove old animation classes if present
  element.classList.remove("animate__fadeIn", "hidden");

  // Add animation class to fade out
  element.classList.add("animate__animated", "animate__fadeOut");
}

let video1 = document.getElementById("video1");
let video2 = document.getElementById("video2");
let section1 = document.getElementById("section_1");
let section2 = document.getElementById("section_2");
let section3 = document.getElementById("section_3");

document.addEventListener("scroll", function () {
  // Get scroll position in px
  var scroll = window.scrollY;

  if (scroll === 0) {
    hideElement(video2);
    showElement(video1);
    return;
  }

  // Calculate viewport height
  const windowHeight = window.innerHeight;

  // Check if section 4 is visible
  if (scroll >= section3.offsetTop - (windowHeight * 2) / 3) {
    hideElement(video1);
    showElement(video2);
  } else {
    hideElement(video2);
    showElement(video1);
  }
});
document.getElementById("video1").addEventListener("error", function () {
  document.getElementById("video1").style.display = "none";
  document.getElementById("video1_placeholder").style.display = "block";
});
