const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".img img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".description h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".content", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".button", {
    ...scrollRevealOption,
    delay: 2000,
});

let btn = document.querySelector("button");
btn.addEventListener('click', () => {
    alert("Courses are updating...😜")
})