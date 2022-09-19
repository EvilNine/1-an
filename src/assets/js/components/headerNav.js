const headerNav = () => {
    const headerDropdown = document.querySelectorAll(".header__dropdown");
    window.addEventListener("click", () => {
        headerDropdown.forEach((item) => {
            item.classList.remove("active");
        });
    });
    headerDropdown.forEach((item) => {
        const btn = item.querySelector(".header__dropdown-btn");
        btn.addEventListener("click", (event) => {
            event.stopPropagation();
            item.classList.toggle("active");
        });
    });
};

export default headerNav;