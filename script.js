// Mermaid cursor follows mouse
const cursor = document.querySelector(".mermaid-cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});

// Navigation for fish buttons
function openPage(num) {
  window.location.href = `page${num}.html`;
}

// Home button
function goHome() {
  window.location.href = "index.html";
}
