const nome=document.querySelector('.black');
nome.addEventListener('mouseover', function(){
    this.style.transition="0.5s ease"
    this.style.boxShadow='0px 0px 70px 30px  #DCFE50';
});
 nome.addEventListener("mouseout", function(){
     this.style.boxShadow= "none";
});


const cognome=document.querySelector('.white');
cognome.addEventListener("mouseover", function(){
    this.style.transition="0.5s ease"
    this.style.boxShadow= "0px 0px 70px 30px  black";
});
cognome.addEventListener("mouseout", function(){
    this.style.boxShadow= "none";
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fs-2");
    elements.forEach(element => {
      element.style.opacity = 0;
      element.style.transform = "translateX(-50px)";
      element.style.transition = "opacity 1s, transform 3s";
    });
  
    function checkScroll() {
      elements.forEach(element => {
        const distanceFromTop = element.getBoundingClientRect().top;
        if (distanceFromTop < window.innerHeight * 0.60) {
          element.style.opacity = 1;
          element.style.transform = "translateX(0)";
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll();
  });




