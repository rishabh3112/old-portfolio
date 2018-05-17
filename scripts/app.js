import {MDCRipple} from "@material/ripple";
import {MDCTopAppBar} from '@material/top-app-bar/index';

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