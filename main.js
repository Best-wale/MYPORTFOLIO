window.addEventListener('load', function () {
    const elements = document.querySelectorAll('.breath');
    elements.forEach(element => {
        element.classList.add('loaded');
    });
});



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

function Getpage(name) {
    const hello = name;
    const filename = hello.split('.');
    if (filename === 'contact') {
        document.getElementById('contact').style.display = 'none';
    }
    var links = document.querySelectorAll('.nav-element');
    links.forEach((link) => {

        link.classList.remove('active');
    })

    const activeItem = document.getElementById(filename[0]); // Assuming the ID matches the page name
    if (activeItem) {
        activeItem.classList.add('active');

    }
    if (activeItem == 'contact') {
        console.log('book')

    }

}





function Page(page) {
    var pageName = page
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        document.getElementById('root').innerHTML = this.responseText
    }
    xhr.open('GET', pageName, true)
    xhr.setRequestHeader('Content-Type', 'application/html');
    xhr.withCredentials = true;
    xhr.send()
    Getpage(pageName);



    document.getElementById("small-item").style.height = "0%";


}


Page('home.html');