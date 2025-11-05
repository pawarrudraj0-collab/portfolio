// Typing animation for header
const typingText = ["Future Full-Stack Developer", "Tech Enthusiast", "Aspiring Software Engineer"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(deleteTyping, 2000);
  }
}

function deleteTyping() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteTyping, 50);
  } else {
    index = (index + 1) % typingText.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Projects loaded dynamically from JavaScript
const projects = [
  { name: "Crypto Dashboard", desc: "Simple dashboard for cryptocurrency prices", link: "https://github.com/pawarrudraj0-collab/crypto-dashboard" },
  { name: "To-Do List", desc: "Task management tool with local storage", link: "https://github.com/pawarrudraj0-collab/todo-list" }
];

const projectContainer = document.getElementById("project-container");
projects.forEach(project => {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project-card";
  projectDiv.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.desc}</p>
    <a href="${project.link}" target="_blank">View Code</a>
  `;
  projectContainer.appendChild(projectDiv);
});
