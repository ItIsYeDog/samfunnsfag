document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname.split("/").pop();
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        const page = link.getAttribute("data-page");
        if (currentPath.includes(page) || currentPath === `${page}.html`) {
            link.classList.add("active");
        }
    });
});