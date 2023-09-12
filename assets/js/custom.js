let label = document.querySelector("#label");
let menu = document.querySelector(".menu");
let aTags = document.querySelectorAll(".menu a");
let hiddenButton = document.getElementById("hidden-button");

let flag = 1;

label.addEventListener("click", () => {
    label.classList.toggle("active");
    if (flag === 1) {
        menu.style.top = 0;
        hiddenButton.classList.remove("d-none");
        document.body.classList.add("overflow-y-hidden");
        flag--;
    }
    else {
        menu.style.top = "-100%";
        hiddenButton.classList.add("d-none");
        document.body.classList.remove("overflow-y-hidden");
        flag++;
    }
});

aTags.forEach((one) => {
    one.addEventListener("click", () => {
        label.classList.toggle("active");
        if (flag === 0) {
            document.body.classList.remove("overflow-y-hidden");
            hiddenButton.classList.add("d-none");
            menu.style.top = "-100%";
            flag++;
        }
    });
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