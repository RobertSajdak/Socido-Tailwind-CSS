const menu = document.querySelector("#menu");
const menuMobile = document.querySelector("#menu-mobile");
// Funkcja pokazująca Menu
const show = (e)=>{
    return function() {
        e.classList.add("flex");
        e.classList.remove("hidden");
    };
};
// Funkcja ukrywająca Menu
const hide = (e)=>{
    return function() {
        e.classList.add("hidden");
        e.classList.remove("flex");
    };
};
// Funkcja odkrywająca / ukrywająca Menu po kliknięciu
const openMenu = ()=>{
    if (menu.classList.contains("hidden")) show(menu)();
    else hide(menu)();
};
document.querySelector("#toggle-mobile").addEventListener("click", show(menuMobile));
document.querySelector("#hide-menu").addEventListener("click", hide(menuMobile));
document.querySelector("#toggle").addEventListener("click", openMenu);
document.addEventListener("click", (event)=>{
    if (event.target.parentNode.id !== "toggle") hide(menu)();
});

//# sourceMappingURL=index.f68744d1.js.map
