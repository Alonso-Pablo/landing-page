function changeURL (objectiveElement, newURL) {
    const defaultURL = "#";
    if (objectiveElement.getAttribute('href') === defaultURL) {
        objectiveElement.setAttribute('href', newURL)
    } else {
        objectiveElement.setAttribute('href', defaultURL);
    }
};

function replaceClass (objectiveElement, classAdd, classRemove) {
    if (objectiveElement.classList.item(1) === classRemove) {
        objectiveElement.classList.remove(classRemove);
        objectiveElement.classList.add(classAdd);
    } else {
        objectiveElement.classList.remove(classAdd);
        objectiveElement.classList.add(classRemove);
    }
};

function hideCountrys (objectiveElement, classAdd, classRemove, exception) {
    const countrys = countryIndividual.length;
    for (let i = 0; i < countrys; i++) {
        if (i === exception) {
            continue
        } else {
            if (objectiveElement[i].classList.item(1) === classRemove) {
                objectiveElement[i].classList.remove(classRemove);
                objectiveElement[i].classList.add(classAdd);
            } else {
                objectiveElement[i].classList.remove(classAdd);
                objectiveElement[i].classList.add(classRemove);
            }
        }
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
};

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
menuIconDisplay.addEventListener("click", () => replaceClass (mainMenu, "displayFlex", "displayNone"));

closeMenu.addEventListener("click", () => {
    mainMenu.classList.remove("displayFlex");
    mainMenu.classList.add("displayNone");
});



// Main
const countryContainer = document.getElementById("country-container")
const countryIndividual = document.querySelectorAll(".country-individual");

const redirectionSection = document.querySelector(".main__redirection");

// Buttons
const selectCountry = document.getElementById("select-country");
const registerButton = document.getElementById("register-button");

    /* Event Listener */
selectCountry.addEventListener("click", () => {
    // show other options
    replaceClass (countryContainer, "displayFlex", "displayNone");
    // hides himself
    replaceClass (selectCountry, "displayFlex", "displayNone");
}); 

// arg = 0
countryIndividual[0].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 0);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=ARG&lang=es"
    changeURL (registerButton, newURL);
});

// belgium = 1
countryIndividual[1].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 1);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=es"
    changeURL (registerButton, newURL);
});

// bolivia = 2
countryIndividual[2].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 2);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=2"
    changeURL (registerButton, newURL);
});

// brasil
countryIndividual[3].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 3);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/cadastro?distributor_code=54100361TBZ&country_code=3"
    changeURL (registerButton, newURL);
});

// chile
countryIndividual[4].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 4);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=4"
    changeURL (registerButton, newURL);
});

// colombia
countryIndividual[5].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 5);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=5"
    changeURL (registerButton, newURL);
});

// costa rica
countryIndividual[6].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 6);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=6"
    changeURL (registerButton, newURL);
});

//  ecuador
countryIndividual[7].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 7);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=ECU"
    changeURL (registerButton, newURL);
});

// el salvador
countryIndividual[8].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 8);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=SAL"
    changeURL (registerButton, newURL);
});

// españa
countryIndividual[9].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 9);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=ESP"
    changeURL (registerButton, newURL);
});

// france
countryIndividual[10].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 10);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en"
    changeURL (registerButton, newURL);
});

// germany
countryIndividual[11].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 11);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en"
    changeURL (registerButton, newURL);
});

// guatemala
countryIndividual[12].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 12);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=10"
    changeURL (registerButton, newURL);
});

// italia
countryIndividual[13].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 13);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/iscrizione?distributor_code=54100361TBZ&country_code=&lang=it"
    changeURL (registerButton, newURL);
});

// mexico
countryIndividual[14].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 14);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=12"
    changeURL (registerButton, newURL);
});

// netherlands
countryIndividual[15].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 15);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en"
    changeURL (registerButton, newURL);
});

// nicaragua
countryIndividual[16].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 16);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=13"
    changeURL (registerButton, newURL);
});

// panama
countryIndividual[17].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 17);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=14"
    changeURL (registerButton, newURL);
});

// paraguay
countryIndividual[18].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 18);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=15"
    changeURL (registerButton, newURL);
});

// peru
countryIndividual[19].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 19);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=PER"
    changeURL (registerButton, newURL);
});

// portugal
countryIndividual[20].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 20);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/cadastro?distributor_code=54100361TBZ"
    changeURL (registerButton, newURL);
});

// rep of ireland
countryIndividual[21].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 21);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en"
    changeURL (registerButton, newURL);
});

//rep dominicana
countryIndividual[22].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 22);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=DOM"
    changeURL (registerButton, newURL);
});

// usa
countryIndividual[23].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 23);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=USA&lang=es"
    changeURL (registerButton, newURL);
});

// uruguay
countryIndividual[24].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 24);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=URU"
    changeURL (registerButton, newURL);
});

// UK (England)
countryIndividual[25].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 25);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en"
    changeURL (registerButton, newURL);
});

// UK (Northern Ireland)
countryIndividual[26].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 26);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en"
    changeURL (registerButton, newURL);
});

// UK (Scotland)
countryIndividual[27].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 27);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en"
    changeURL (registerButton, newURL);
});

// UK (Wales)
countryIndividual[28].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 28);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en"
    changeURL (registerButton, newURL);
});

// rusia
countryIndividual[29].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", 29);
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = "https://portal.omnilife.com/registaciya?distributor_code=54100361TBZ&country_code=RUS"
    changeURL (registerButton, newURL);
});

/*
countryIndividual[].addEventListener("click", () => {
    hideCountrys (countryIndividual, "displayFlex", "displayNone", );
    replaceClass (redirectionSection, "displayFlex", "displayNone");
    let newURL = ""
    changeURL (registerButton, newURL);
});
*/


/*
Bolivia:
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=2

Brasil:
https://portal.omnilife.com/cadastro?distributor_code=54100361TBZ&country_code=3

Guatemala:
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=10

Mexico:
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=12

Nicaragua:
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=13

Chile:
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=4

Panama:
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=14

Colombia
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=5

Paraguay
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=15

Costa rica:
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=6

Peru
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=PER

Ecuador
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=ECU

Rep. Dominicana
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=DOM

el salvador
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=SAL

uruguay
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=URU

USA
https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=USA&lang=es



RUSIA
https://portal.omnilife.com/registaciya?distributor_code=54100361TBZ&country_code=RUS

España
https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=ESP

italia
https://portal.omnilife.com/iscrizione?distributor_code=54100361TBZ&country_code=&lang=it

https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en
*/
