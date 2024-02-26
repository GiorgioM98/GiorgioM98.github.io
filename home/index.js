const nome = document.querySelector('.black');
nome.addEventListener('mouseover', function () {
    this.style.transition = "0.5s ease"
    this.style.boxShadow = '0px 0px 70px 30px  #DCFE50';
});
nome.addEventListener("mouseout", function () {
    this.style.boxShadow = "none";
});


const cognome = document.querySelector('.white');
cognome.addEventListener("mouseover", function () {
    this.style.transition = "0.5s ease"
    this.style.boxShadow = "0px 0px 70px 30px  black";
});
cognome.addEventListener("mouseout", function () {
    this.style.boxShadow = "none";
});


const image = document.querySelector('.immagine');
image.addEventListener("mouseover", function () {
    this.style.transition = "0.5s ease"
    this.style.transform = "scale(1.1)"
    this.style.boxShadow = "0px 0px 40px 20px white"
});
image.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "none"

})



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".title, .fs-5, .col-md-4, .all, .rigaSkills, .text-start, .text-end, .torino, .formIscrizione");
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = "translateX(-50px)";
        element.style.transition = "opacity 1s, transform 3s";
    });

    function checkScroll() {
        elements.forEach(element => {
            const distanceFromTop = element.getBoundingClientRect().top;
            if (distanceFromTop < window.innerHeight * 0.50) {
                element.style.opacity = 1;
                element.style.transform = "translateX(10px)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
