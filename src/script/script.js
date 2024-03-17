const check = () =>     {

    const imageList = document.querySelector(".slider-wrapp .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapp .slide-buttom");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });


}

window.addEventListener("load", check)


/* Evento do header */


window.addEventListener("scroll", function verificar () {

    var header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)

})

/* Menu Mobile - Interação */

function mostrarMenuMobile() {

    let menuIcon = document.querySelector(".mobile-links");
    let icon = document.querySelector(".icon");
 

    if (menuIcon.classList.contains('.open')) {

        menuIcon.classList.remove('.open')
        
        
        menuIcon.style.display = "none"
        icon.textContent = "menu"
        console.log("close")

        
    } else {

        menuIcon.classList.add('.open')
        menuIcon.style.display = "flex"
        icon.textContent = "close"
        console.log("open")

    }

}

