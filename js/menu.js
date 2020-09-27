function dropDownFunction() {
    document.querySelector("#menuDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches(".menubtn")) {

        const dropdowns = document.querySelector(".menu-content");

        for (let i = 0; i < dropdowns.lenght; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}





