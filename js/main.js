// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navList = document.getElementById("navList");
  
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  });
  