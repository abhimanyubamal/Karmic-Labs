let label = document.querySelector("#label");
let menu = document.querySelector(".menu");
let btnWrapper = document.querySelector(".button-wrapper");

let flag = 1;

label.addEventListener("click", () => {
    // menu.classList.toggle("d-flex");
    if (flag === 1) {
        menu.style.top = 0;
        btnWrapper.style.top = 0;
        flag--;
    }
    else {
        menu.style.top = "-100%";
        btnWrapper.style.top = "-100%";
        flag++;
    }
});

$('.slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});