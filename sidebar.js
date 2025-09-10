// sidebar.js
fetch("sidebar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("sidebar-placeholder").innerHTML = data;
  })
  .catch(error => console.error("Sidebar load error:", error));
