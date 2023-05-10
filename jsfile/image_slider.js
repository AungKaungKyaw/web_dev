const buttons = document.querySelector("[data-carousel-button]")

buttons.forEach(btn => {
    btn.addEventListener("click",()=>{
        const offet = btn.dataset.carouselButton === "next" ? 1: -1
        const slides = btn.closest("[data-carousel]").querySelector("[data-slides]")
    })

})