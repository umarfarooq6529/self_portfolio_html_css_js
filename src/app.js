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