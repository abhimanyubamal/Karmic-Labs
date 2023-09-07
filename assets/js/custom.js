let label = document.querySelector("#label");
let menu = document.querySelector(".menu");
let aTags = document.querySelectorAll(".menu a");
let hiddenButton = document.getElementById("hidden-button");


aTags.forEach((one) => {
    one.addEventListener("click", () => {
        console.log(one);
        if (flag === 0) { 
        }
    })
} )

let flag = 1;

label.addEventListener("click", () => {
    
    if (flag === 1) {
        menu.style.top = 0;
        hiddenButton.classList.remove("d-none");
        flag--;
    }
    else {
        menu.style.top = "-100%";
        hiddenButton.classList.add("d-none");
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