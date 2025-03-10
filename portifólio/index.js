
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.1,
        }
    );
//navbar sumir 

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
});

let lastScrollY = window.scrollY;
const header = document.querySelector('header');


window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        header.classList.add('hidden');
        header.classList.remove('show');
    } else {
        header.classList.add('show');
        header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});

header.addEventListener('mouseenter', () => {
    header.classList.add('show');
    header.classList.remove('hidden');
});

header.addEventListener('mouseleave', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add('hidden');
        header.classList.remove('show');
    }
});
