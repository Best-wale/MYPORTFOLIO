function openMenu() {
    document.getElementById("small-item").style.height = "100vh";

}
function closeMenu() {
    document.getElementById("small-item").style.height = "0%";

}
function click_item() {
    var menu = document.getElementById("small-item");

    var menu_icon = document.getElementById("menu")

    if (menu.style.height == '100vh') {
        closeMenu();
        menu_icon.setAttribute('class', ' bi bi-text-indent-left')



    } else {
        openMenu()
        menu_icon.setAttribute('class', 'bi bi-x')
    }
}
