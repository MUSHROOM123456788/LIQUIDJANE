// Mermaid cursor follows mouse
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Fish buttons navigate to pages
function openPage(num){
  window.location.href = `page${num}.html`;
}

// Click title to return home
function goHome(){
  window.location.href = "index.html";
}
