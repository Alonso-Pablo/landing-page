const menuIconDisplay = document.getElementById("menu-icon");
const mainMenu = document.getElementById("main-menu");
const closeMenu = document.getElementById("close-menu-icon");


function replaceClass (objetiveElement, classAdd, classRemove) {
    if ( objetiveElement.classList.item(1) === classRemove) {
        objetiveElement.classList.add(classAdd);
        objetiveElement.classList.remove(classRemove);
    } else {
        objetiveElement.classList.remove(classAdd)
        objetiveElement.classList.add(classRemove);
    }
}

menuIconDisplay.addEventListener("click", () => {
    replaceClass (mainMenu, "displayFlex", "displayNone");
});

closeMenu.addEventListener("click", () => {
    mainMenu.classList.remove("displayFlex");
    mainMenu.classList.add("displayNone")
});