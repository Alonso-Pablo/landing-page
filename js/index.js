
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


/* MAIN */
const mainDisclaimer = document.getElementById("main__disclaimer");

    /* Buttons */

    /* Functions */
        /* main > Disclaimer - Display or Hide */
mainDisclaimer.addEventListener("click", () => replaceClass (mainDisclaimer, "displayFlex", "displayNone") );


