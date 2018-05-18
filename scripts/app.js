import {MDCRipple} from "@material/ripple";
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTemporaryDrawer} from '@material/drawer';

const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);

document.querySelectorAll('.dr-link').forEach(item => {
    item.addEventListener('click' , () => drawer.open = false);
});

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
document.querySelectorAll(".mdc-button").forEach(el => {
    new MDCRipple(el);
});

document.querySelectorAll(".mdc-chip").forEach(el => {
    new MDCRipple(el);
});



window.sr = ScrollReveal();
sr.reveal(".mdc-card",{
    reset: true,
    scale: 0.8,
    origin: "bottom",
    easing:"cubic-bezier(0.0, 0.0, 0.2, 1)",
    container: document.querySelector("main"),
    viewFactor: 0.5,
},200);