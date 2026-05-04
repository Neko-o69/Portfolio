document.addEventListener("DOMContentLoaded", () => {
    const boutonMenu = document.getElementById("bouton-menu");
    const menu = document.getElementById("menu");

    if (!boutonMenu || !menu) {
        return;
    }

    boutonMenu.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    const liens = menu.querySelectorAll("a");

    liens.forEach(lien => {
        lien.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
});
