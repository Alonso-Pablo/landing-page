
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

/* Arrows Buttons */
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right")

const indication = document.getElementsByClassName("indication");

const imageIndividual = document.getElementsByClassName("image__individual")

let indicationCount = indication.length; //18
let ImageCount = imageIndividual.length; //3


/* Next Image (clouser) */
const addupImage = () => {
    let imageCurrent = 0;
    const imageRecount = (image) => {
        if (image === 1){
            imageCurrent += image;
            console.log(imageCurrent);
            imageIndividual[(imageCurrent - 1)].classList.remove("displayFlex");
            imageIndividual[(imageCurrent - 1)].classList.add("displayNone");
            imageIndividual[imageCurrent].classList.remove("displayNone");
            imageIndividual[imageCurrent].classList.add("displayFlex");
        } else {
            imageCurrent += image;
            console.log(imageCurrent);
            imageIndividual[(imageCurrent + 1)].classList.remove("displayFlex");
            imageIndividual[(imageCurrent + 1)].classList.add("displayNone");
            imageIndividual[imageCurrent].classList.remove("displayNone");
            imageIndividual[imageCurrent].classList.add("displayFlex");
        }
    }
    return imageRecount;
    
};
let nextImage = addupImage();


arrowRight.addEventListener("click", () => {
    nextImage(1);
});

arrowLeft.addEventListener("click",  () => {
    nextImage(-1);
})
