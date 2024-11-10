import "./style.css";
import { loadHome } from "./loadhome";
import { loadMenu } from "./loadmenu";
import { loadAbout } from "./loadabout";

const content = document.querySelector('.content');

function loadHeader() {
    const header = document.createElement('header');
    const ul = document.createElement('ul');
    const liHome = document.createElement('li');
    liHome.setAttribute('id', 'home');
    liHome.textContent = 'Home';
    const liMenu = document.createElement('li');
    liMenu.setAttribute('id', 'menu');
    liMenu.textContent = 'Menu';
    const liAbout = document.createElement('li');
    liAbout.setAttribute('id', 'about');
    liAbout.textContent = 'About';
    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liAbout);
    header.appendChild(ul);
    content.appendChild(header);
    liHome.addEventListener('click', () => {
        clearPage();
        loadHeader();
        loadHome();
    });
    
    liMenu.addEventListener('click', () => {
        clearPage();
        loadHeader();
        loadMenu();
    });
    liAbout.addEventListener('click', () => {
        clearPage();
        loadHeader();
        loadAbout();
    })
};

loadHeader();
loadHome();

function clearPage() {
    content.innerHTML = '';
}







