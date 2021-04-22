
function replaceClass (objetiveElement, classAdd, classRemove) {
    if ( objetiveElement.classList.item(1) === classRemove) {
        objetiveElement.classList.add(classAdd);
        objetiveElement.classList.remove(classRemove);
    } else {
        objetiveElement.classList.remove(classAdd);
        objetiveElement.classList.add(classRemove);
    }
};

/* NAV */
const searchMenu = document.getElementById("search");
const mainMenu = document.getElementById("main-menu");

    /* Buttons */
const searchIcon = document.getElementById("search-icon");

const menuIconDisplay = document.getElementById("menu-icon");
const closeMenu = document.getElementById("close-menu-icon");

    /* Functions */
    
        /* Search Menu - Display or Hide */
searchIcon.addEventListener("click", () => {
    replaceClass (searchMenu, "displayFlex", "displayHidden");
});

        /* Option menu - Display or Hide */
menuIconDisplay.addEventListener("click", () => replaceClass (mainMenu, "displayFlex", "displayNone") );

closeMenu.addEventListener("click", () => {
    mainMenu.classList.remove("displayFlex");
    mainMenu.classList.add("displayNone");
});


const indication1 = document.getElementById("indication_1");
const indication2 = document.getElementById("indication_2");
const indication3 = document.getElementById("indication_3");
const indication4 = document.getElementById("indication_4");
const indication5 = document.getElementById("indication_5");
const indication6 = document.getElementById("indication_6");
const indication7 = document.getElementById("indication_7");
const indication8 = document.getElementById("indication_8");
const indication9 = document.getElementById("indication_9");
const indication10 = document.getElementById("indication_10");
const indication11 = document.getElementById("indication_11");
const indication12 = document.getElementById("indication_12");
const indication13 = document.getElementById("indication_13");
const indication14 = document.getElementById("indication_14");
const indication15 = document.getElementById("indication_15");
const indication16 = document.getElementById("indication_16");
const indication17 = document.getElementById("indication_17");
const indication18 = document.getElementById("indication_18");

