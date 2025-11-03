document.addEventListener("mousemove", (e) => {
  let cursor = document.querySelector(".mermaid-cursor");
  if (!cursor) {
    cursor = document.createElement("div");
    cursor.classList.add("mermaid-cursor");
    cursor.textContent = "🧜‍♀️";
    document.body.appendChild(cursor);
  }
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

function openPage(num) {
  alert(`This would open Page ${num} (coming soon!)`);
}

function goHome() {
  alert("You are already on the LiquidJane Home Page!");
}
