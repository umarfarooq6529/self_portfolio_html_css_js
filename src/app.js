// applying fade transition on .hidden elements
const fadeElements = document.querySelectorAll('.hidden');

const section_main = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) entry.target.classList.add('fade');
        else entry.target.classList.remove('fade')
    });
});

fadeElements.forEach((el) => section_main.observe(el));

// applying left slide transition section_1

const slideElements = document.querySelectorAll('.slide');

const section_1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) entry.target.classList.add('slide_on');
        else entry.target.classList.remove('slide_on')
    });
});

slideElements.forEach((el) => section_1.observe(el));

// navbar hover Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector(".hoverEffect").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if (index < iterations)  return event.target.dataset.value[index];

            return letters[Math.floor(Math.random() * 26)]
        }).join("");

        if (iterations >= 11) clearInterval(interval);
        iterations += 1 / 2;

    }, 30)

}