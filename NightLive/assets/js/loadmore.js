document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
  
    let visibleBoxes = 3;
    showBoxes();
  
    loadMoreBtn.addEventListener("click", function() {
      visibleBoxes = boxes.length;
      showBoxes();
      loadMoreBtn.style.display = "none"; 
    });
  
    function showBoxes() {
      for (let i = 0; i < visibleBoxes; i++) {
        boxes[i].style.display = "block";
      }
    }
  });
  