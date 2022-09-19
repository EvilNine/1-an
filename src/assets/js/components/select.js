const select = () => {
    const container = document.querySelectorAll(".select");
    window.addEventListener("click", () => {
        container.forEach((item) => {
            item.classList.remove("active");
        });
    });
    container.forEach((item) => {
        const val = item.querySelector(".select__value");
        const input = item.querySelector(".select__input");
        const options = item.querySelectorAll(".select__panel-item");
        input.addEventListener("click", (event) => {
            event.stopPropagation();
            item.classList.toggle("active");
        });
        options.forEach((item) => {
            item.addEventListener("click", (event) => {
                input.querySelector("input").value = event.target.innerHTML;
                val.value = event.target.getAttribute("data-value");
            });
        });
    });
};

export default select;