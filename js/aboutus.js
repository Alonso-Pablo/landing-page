
function replaceClass (objetiveElement, classAdd, classRemove) {
    if ( objetiveElement.classList.item(1) === classRemove) {
        objetiveElement.classList.add(classAdd);
        objetiveElement.classList.remove(classRemove);
    } else {
        objetiveElement.classList.remove(classAdd);
        objetiveElement.classList.add(classRemove);
    }
};

function openNewTab () {
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
    openNewTab();
});
searchIconTablet.addEventListener("click", () => {
    openNewTab();
});
searchIconDesktop.addEventListener("click", () => {
    openNewTab();
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
/* Arrows Buttons */
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right")


const indication = document.getElementsByClassName("indication");

/* Images individuals */
const imageIndividual = document.getElementsByClassName("image__individual")

/* Data */ 
let indicationCount = indication.length; // 18
let imageTotalCount = imageIndividual.length; // 4
let imageTotalCountMinusOne = (imageIndividual.length - 1); // 3


/* Next and Previous Image (clouser) */
const addupImage = () => {
    let imageCurrent = 0;
    const imageRecount = (image) => {
        if (image === 1){
            imageCurrent += image;
            if (imageCurrent === (imageTotalCount)) {
                console.log(`${imageCurrent} supera el numero de imagenes totales`);

                imageIndividual[(imageCurrent - 1)].classList.remove("displayFlex");
                imageIndividual[(imageCurrent - 1)].classList.add("displayNone");
                imageIndividual[0].classList.remove("displayNone");
                imageIndividual[0].classList.add("displayFlex");

                indication[(imageCurrent - 1)].classList.remove("active");
                indication[(imageCurrent - 1)].classList.add("inactive");
                indication[0].classList.remove("inactive");
                indication[0].classList.add("active");

                imageCurrent = 0;
            } else {
                console.log(imageCurrent);
                imageIndividual[(imageCurrent - 1)].classList.remove("displayFlex");
                imageIndividual[(imageCurrent - 1)].classList.add("displayNone");
                imageIndividual[imageCurrent].classList.remove("displayNone");
                imageIndividual[imageCurrent].classList.add("displayFlex");

                indication[(imageCurrent - 1)].classList.remove("active");
                indication[(imageCurrent - 1)].classList.add("inactive");
                indication[imageCurrent].classList.add("active");
                indication[imageCurrent].classList.remove("inactive");
            }
        } else {
            imageCurrent += image;
            if (imageCurrent === -1) {
                console.log(`${imageCurrent} el numero de imagenes totales es negativo`);

                imageIndividual[(imageCurrent + 1)].classList.remove("displayFlex");
                imageIndividual[(imageCurrent + 1)].classList.add("displayNone");
                imageIndividual[(imageTotalCount - 1)].classList.remove("displayNone");
                imageIndividual[(imageTotalCount - 1)].classList.add("displayFlex");

                indication[(imageCurrent + 1)].classList.remove("active");
                indication[(imageCurrent + 1)].classList.add("inactive");
                indication[(imageTotalCount - 1)].classList.add("active");
                indication[(imageTotalCount - 1)].classList.remove("inactive");

                imageCurrent = imageTotalCountMinusOne;
            } else {
                console.log(imageCurrent);
                imageIndividual[(imageCurrent + 1)].classList.remove("displayFlex");
                imageIndividual[(imageCurrent + 1)].classList.add("displayNone");
                imageIndividual[imageCurrent].classList.remove("displayNone");
                imageIndividual[imageCurrent].classList.add("displayFlex");

                indication[(imageCurrent + 1)].classList.remove("active");
                indication[(imageCurrent + 1)].classList.add("inactive");
                indication[imageCurrent].classList.add("active");
                indication[imageCurrent].classList.remove("inactive");
            }
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