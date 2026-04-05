AOS.init();

function openProject(page) {
  window.location.href = page;
}

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Typing Effect
const text = "Devi Deekshitha";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();