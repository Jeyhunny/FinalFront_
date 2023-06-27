window.addEventListener("load" , function(){
    const timeoutDuration = 4000;
    const timeout = setTimeout(hidePreloader, timeoutDuration);
  }) 
  function hidePreloader() {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("preloader-hidden");
    setTimeout(function() {
      preloader.style.display = "none";
    }, 500);
  }
  
  