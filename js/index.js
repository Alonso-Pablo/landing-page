
function replaceClass (objectiveElement, classAdd, classRemove) {
    if ( objectiveElement.classList.item(1) === classRemove) {
        objectiveElement.classList.add(classAdd);
        objectiveElement.classList.remove(classRemove);
    } else {
        objectiveElement.classList.remove(classAdd);
        objectiveElement.classList.add(classRemove);
    }
};

function openNewTabfromInput () {
    if (inputCellphone.value != "" && inputCellphone.value != " ") { 
        window.location.href = `products.html#${inputCellphone.value}`;      
    } else if (inputTablet.value != "" && inputTablet.value != " ") {
        window.location.href = `products.html#${inputTablet.value}`;
    } else if (inputDesktop.value != "" && inputDesktop.value != " ") {
        window.location.href = `products.html#${inputDesktop.value}`;
    }
}

/* NAV */

const searchMenu = document.getElementById("search");
const mainMenu = document.getElementById("main-menu");

const inputCellphone = document.getElementById("input-cellphone");
const inputTablet = document.getElementById("input-tablet");
const inputDesktop = document.getElementById("input-desktop");

    /* Buttons */
const searchIconCellphone = document.getElementById("search-icon-cellphone");
const searchIconTablet = document.getElementById("search-icon-tablet");
const searchIconDesktop = document.getElementById("search-icon-desktop");


const menuIconDisplay = document.getElementById("menu-icon");
const closeMenu = document.getElementById("close-menu-icon");

    /* Event Listener */
window.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        if (inputCellphone.value != "" && inputCellphone.value != " ") { 
            window.location.href = `products.html#${inputCellphone.value}`;      
        } else if (inputTablet.value != "" && inputTablet.value != " ") {
            window.location.href = `products.html#${inputTablet.value}`;
        } else if (inputDesktop.value != "" && inputDesktop.value != " ") {
            window.location.href = `products.html#${inputDesktop.value}`;
        }
    };
    },false);

searchIconCellphone.addEventListener("click", () => {
    openNewTabfromInput();
});
searchIconTablet.addEventListener("click", () => {
    openNewTabfromInput();
});
searchIconDesktop.addEventListener("click", () => {
    openNewTabfromInput();
});

        /* Search Menu - Display or Hide */
searchIconCellphone.addEventListener("click", () => {
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


    /* Event Listener */

        /* main > Disclaimer - Display or Hide */
mainDisclaimer.addEventListener("click", () => replaceClass (mainDisclaimer, "displayFlex", "displayNone") );


