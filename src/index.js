import "./style.css";
import { loadHome } from "./loadhome";
import { loadMenu } from "./loadmenu";
import { loadAbout } from "./loadabout";

const content = document.querySelector('.content');

function loadHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'home');
    homeBtn.textContent = 'Home';
    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.textContent = 'Menu';
    const aboutBtn = document.createElement('button');
    aboutBtn.setAttribute('id', 'about');
    aboutBtn.textContent = 'About';
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);
    header.appendChild(nav);
    content.appendChild(header);
    homeBtn.addEventListener('click', () => {
        clearPage();
        loadHeader();
        loadHome();
    });
    
    menuBtn.addEventListener('click', () => {
        clearPage();
        loadHeader();
        loadMenu();
    });
    aboutBtn.addEventListener('click', () => {
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







