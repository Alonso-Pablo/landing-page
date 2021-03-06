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
            location.reload();      
        } else if (inputTablet.value != "" && inputTablet.value != " ") {
            window.location.href = `products.html#${inputTablet.value}`;
            location.reload();
        } else if (inputDesktop.value != "" && inputDesktop.value != " ") {
            window.location.href = `products.html#${inputDesktop.value}`;
            location.reload();
        }
    };
    });

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

/* Main > List of products > container__product_individual > content_product > Product_details */
const price = document.getElementsByClassName("product__price");

let prices = [
    181, // 0 - ALOE 200
    925, // 1 - ALOE 900 L
    925, // 2 - ALOE 900 A
    3110,// 3 - AQTUA
    1640,// 4 - BIOCROS BOTELLA
    1640,// 5 - BIOCROS CAJA
    1730,// 6 - BIOCROS SUPREME
    1800,// 7 - CAFEZZINO PLUS
    2200,// 8 - DOLCEVITA SUPREME
    1050,// 9 - EGO FRUTAS X6
    155, // 10 - EGO 10
    155, // 11 - EGO HERBAL
    1090,// 12 - EGO LIFE SUPREME
    3230,// 13 - ESTOP PLUS
    2110,// 14 - FEM PLUS
    2460,// 15 - FIBER SUPREME
    2160,// 16 - FOCUS
    2180,// 17 - FOCUS SUPREME
    2110,// 18 - HOMO PLUS
    2100,// 19 - OMNILIFE VKIDS
    2230,// 20 - OMNILIFE SHAKE SUPREME
    2300,// 21 - OMNIOST SUPREME
    2270,// 22 - OMNIPLUS CAJA
    2240,// 23 - OMNIPLUS BOTELLA
    2310,// 24 - OMNIPLUS SUPREME
    2200,// 25 - OMNIVIU SUPREME
    1680,// 26 - ONE C MIX PLUS
    2810,// 27 - POWER MAKER BOTELLA
    2860,// 28 - POWER MAKER SUPREME
    1490,// 29 - STARBIEN
    2440,// 30 - SUPER MIX CHOCOLATE
    2700,// 31 - SUPERMIX SUPREME VAINILLA
    1480,// 32 - THERMOGEN COFFEE BOTELLA
    1480,// 33 - THERMOGEN COFFEE CAJA
    1680,// 34 - THERMOGEN TEA LIMON SUPREME
    2500,// 35 - THERMOGEN TEA MARACUYA SUPREME
    4380 // 36 - UZO SUPREME
];

let numberOfProducts = price.length; // 37

if (prices[0].innerText === "") {
    for (let i = 0; i < numberOfProducts; i++) {
        price[i].innerText = `$ ${prices[i]}`;
    }
};

/* Segun numeros de array se selecciona los elementos a mostras y los demas se ocultan */
function showTheChosen (objectiveElement, array) {
    let numberOfProducts = objectiveElement.length;
    for (let i = 0; i < numberOfProducts; i++) {
        if (!array.includes(i)) {
            objectiveElement[i].classList.remove("displayFlex");
            objectiveElement[i].classList.add("displayNone");
        } else {
            objectiveElement[i].classList.remove("displayNone");
            objectiveElement[i].classList.add("displayFlex");
        }
    }
};

/* Reemplaza una clase por otra de un elemento, y lo vuelve a hacer si se activa nuevamente, volviendo a como estaba antes  */
function replaceClass (objectiveElement, classAdd, classRemove) {
    if (objectiveElement.classList.item(1) === classRemove) {
        objectiveElement.classList.add(classAdd);
        objectiveElement.classList.remove(classRemove);
    } else {
        objectiveElement.classList.remove(classAdd);
        objectiveElement.classList.add(classRemove);
    }
};

/* Reemplaza una clase por otra de un elemento, no vuelve a reemplazar de nuevo a como estaba antes */
function replaceDisplay (objectiveElement, classAdd, classRemove) {
    let numberOfProducts = objectiveElement.length;
    for(let i = 0; i < numberOfProducts; i++) {
        if(objectiveElement[i].classList.item(1) === classRemove){
            objectiveElement[i].classList.remove(classRemove);
            objectiveElement[i].classList.add(classAdd);
        }
    }
}

/* Reemplaza una clase por otra de un conjunto de elementos seleccionados por el numero del array */
function replaceClassForClassName (objectiveElement, array, classAdd, classRemove) {
    let numberOfProducts = objectiveElement.length;
    for (let i = 0; i < numberOfProducts; i++) {

        if(!array.includes(i)){
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

/* Vuelve a los otros botones-filtros al color normal (depresionado) */
function depressBtn (objectiveElement1, objectiveElement2, objectiveElement3) {
    if (objectiveElement1.classList.item(1) === "btn-pressed") {
        objectiveElement1.classList.remove("btn-pressed");
        objectiveElement1.classList.add("btn-normal")
    }
    if (objectiveElement2.classList.item(1) === "btn-pressed") {
        objectiveElement2.classList.remove("btn-pressed");
        objectiveElement2.classList.add("btn-normal")
    }
    if (objectiveElement3.classList.item(1) === "btn-pressed") {
        objectiveElement3.classList.remove("btn-pressed");
        objectiveElement3.classList.add("btn-normal")
    }
}


/* Main > main__filters__container */
const nutritionForYou = document.getElementById("nutrition-for-you");
const weightControl = document.getElementById("weight-control");
const powerPerformance = document.getElementById("power-performance");
const healthyDigestion = document.getElementById("healthy-digestion");

const containerProductIndividual = document.getElementsByClassName("container__product_individual")
const tester = document.getElementById("tester");


nutritionForYou.addEventListener("click", () => {
    let numbersSelected = [19, 20, 22, 23, 24, 30, 31];

    if (tester.classList[1] === "no-pressed") {
        replaceDisplay(containerProductIndividual, "displayFlex", "displayNone");
        replaceClassForClassName(containerProductIndividual, numbersSelected, "displayFlex", "displayNone");
        replaceClass (nutritionForYou, "btn-normal", "btn-pressed");

        depressBtn (weightControl, powerPerformance, healthyDigestion);

        tester.classList.remove("no-pressed");
        tester.classList.add("pressed")
    } else {
        replaceDisplay(containerProductIndividual, "displayFlex", "displayNone");
        replaceClassForClassName(containerProductIndividual, numbersSelected, "displayFlex", "displayNone");
        replaceClass (nutritionForYou, "btn-normal", "btn-pressed");
        tester.classList.remove("pressed");
        tester.classList.add("no-pressed")
        
        depressBtn (weightControl, powerPerformance, healthyDigestion);
    }
});

weightControl.addEventListener("click", () => {
    let numbersSelected = [7, 8, 15, 32, 33, 34, 35];

    if (tester.classList[1] === "no-pressed") {
        replaceDisplay(containerProductIndividual, "displayFlex", "displayNone");
        replaceClassForClassName(containerProductIndividual, numbersSelected, "displayFlex", "displayNone");
        replaceClass (weightControl, "btn-normal", "btn-pressed");

        depressBtn (nutritionForYou, powerPerformance, healthyDigestion);

        tester.classList.remove("no-pressed");
        tester.classList.add("pressed")
    } else {
        replaceDisplay(containerProductIndividual, "displayFlex", "displayNone");
        replaceClassForClassName(containerProductIndividual, numbersSelected, "displayFlex", "displayNone");
        replaceClass (weightControl, "btn-normal", "btn-pressed");
        tester.classList.remove("pressed");
        tester.classList.add("no-pressed")

        depressBtn (nutritionForYou, powerPerformance, healthyDigestion);
    }
});

powerPerformance.addEventListener("click", () => {
    let numbersSelected = [3, 4, 5, 6, 10, 12, 27, 28];

    if (tester.classList[1] === "no-pressed") {
        replaceDisplay(containerProductIndividual, "displayFlex", "displayNone");
        replaceClassForClassName(containerProductIndividual, numbersSelected, "displayFlex", "displayNone");
        replaceClass (powerPerformance, "btn-normal", "btn-pressed");

        depressBtn (nutritionForYou, weightControl, healthyDigestion);

        tester.classList.remove("no-pressed");
        tester.classList.add("pressed")
    } else {
        replaceDisplay(containerProductIndividual, "displayFlex", "displayNone");
        replaceClassForClassName(containerProductIndividual, numbersSelected, "displayFlex", "displayNone");
        replaceClass (powerPerformance, "btn-normal", "btn-pressed");
        tester.classList.remove("pressed");
        tester.classList.add("no-pressed")
                
        depressBtn (nutritionForYou, weightControl, healthyDigestion);
    }
});

healthyDigestion.addEventListener("click", () => {
    let numbersSelected = [0, 1, 2, 9, 11, 15];


    if (tester.classList[1] === "no-pressed") {
        replaceDisplay(containerProductIndividual, "displayFlex", "displayNone");
        replaceClassForClassName(containerProductIndividual, numbersSelected, "displayFlex", "displayNone");
        replaceClass (healthyDigestion, "btn-normal", "btn-pressed");

        depressBtn (nutritionForYou, weightControl, powerPerformance);

        tester.classList.remove("no-pressed");
        tester.classList.add("pressed")
                
        depressBtn (nutritionForYou, powerPerformance, healthyDigestion);
    } else {
        replaceDisplay(containerProductIndividual, "displayFlex", "displayNone");
        replaceClassForClassName(containerProductIndividual, numbersSelected, "displayFlex", "displayNone");
        replaceClass (healthyDigestion, "btn-normal", "btn-pressed");
        tester.classList.remove("pressed");
        tester.classList.add("no-pressed");
        
        depressBtn (nutritionForYou, powerPerformance, weightControl);
    }
});



let urlHash = window.location.hash.toLowerCase();

urlHash = urlHash.replace(/^./, "");
urlHash = urlHash.replace(/%20/g, "");
switch (urlHash) {
    case 'aloe':
    case 'aloevera':
    case 'aloebeta':
    case 'aloebera':
    case 'aloeveta':
    case 'aloesupreme':
    case 'aloeverasupreme':
    case 'aloebetasupreme':
    case 'aloeberasupreme':
    case 'aloevetasupreme':
        productChosen = [0,1,2];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'aloechiquito':
    case 'aloepeque??o':
    case 'aloe200':
    case 'aloe200ml':
    case 'aloe200supreme':
    case 'aloe200mlsupreme':
    case 'aloebotellita':
        productChosen = [0];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'aloegrande':
    case 'aloe900':
    case 'aloe900ml':
    case 'aloe900mililitros':
    case 'aloe900supreme': 
    case 'aloe900mlsupreme':
    case 'aloe900mililitrossupreme':
    case '900aloe':
        productChosen = [1,2];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'aloelimon':
    case 'aloelimonsupreme':
    case 'aloelimon900':
    case 'aloelimon900supreme':
    case 'aloelimon900ml':
    case 'aloelimon900mlsupreme':
    case 'aloelimon900mililitros':
    case 'aloelimon900mililitrossupreme':
    case 'aloelim??n':
    case 'aloelim??nsupreme':
    case 'aloelim??n900':
    case 'aloelim??n900supreme':
    case 'aloelim??n900ml':
    case 'aloelim??n900mlsupreme':
    case 'aloelim??n900mililitros':
    case 'aloelim??n900mililitrossupreme':
    case 'aloebetalimon':
    case 'aloebetalimonsupreme':
    case 'aloebetalimon900':
    case 'aloebetalimon900supreme':
    case 'aloebetalimon900ml':
    case 'aloebetalimon900mlsupreme':
    case 'aloebetalimon900mililitros':
    case 'aloebetalimon900mililitrossupreme':
    case 'aloebetalim??n':
    case 'aloebetalim??nsupreme':
    case 'aloebetalim??n900':
    case 'aloebetalim??n900supreme':
    case 'aloebetalim??n900ml':
    case 'aloebetalim??n900mlsupreme':
    case 'aloebetalim??n900mililitros':
    case 'aloebetalim??n900mililitrossupreme':
    case 'aloebeta900limon':
    case 'aloebeta900limonsupreme':
    case 'aloebeta900mllimon':
    case 'aloebeta900mllimonsupreme':
    case 'aloebeta900mililitroslimon':
    case 'aloebeta900lim??n':
    case 'aloebeta900mllim??n':
    case 'aloebeta900mililitroslim??n':
        productChosen = [1];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'aloeanana':
    case 'aloeanana900':
    case 'aloeanana900ml':
    case 'aloeanana900mililitros':
    case 'aloeanan??':
    case 'aloeanan??900':
    case 'aloeanan??900ml':
    case 'aloeanan??900mililitros':
    case 'aloebetaanana':
    case 'aloebetaanana900':
    case 'aloebetaanana900ml':
    case 'aloebetaanana900mililitros':
    case 'aloebetaanan??':
    case 'aloebetaanan??900':
    case 'aloebetaanan??900ml':
    case 'aloebetaanan??900mililitros':
    case 'aloebeta900anana':
    case 'aloebeta900mlanana':
    case 'aloebeta900mililitrosanana':
    case 'aloebeta900anan??':
    case 'aloebeta900mlanan??':
    case 'aloebeta900mililitrosanan??':
    case 'aloeananasupreme':
    case 'aloeanana900supreme':
    case 'aloeanana900mlsupreme':
    case 'aloeanana900mililitrossupreme':
    case 'aloeanan??supreme':
    case 'aloeanan??900supreme':
    case 'aloeanan??900mlsupreme':
    case 'aloeanan??900mililitrossupreme':
    case 'aloebetaananasupreme':
    case 'aloebetaanana900supreme':
    case 'aloebetaanana900mlsupreme':
    case 'aloebetaanana900mililitrossupreme':
    case 'aloebetaanan??supreme':
    case 'aloebetaanan??900supreme':
    case 'aloebetaanan??900mlsupreme':
    case 'aloebetaanan??900mililitrossupreme':
    case 'aloebeta900ananasupreme':
    case 'aloebeta900mlananasupreme':
    case 'aloebeta900mililitrosananasupreme':
    case 'aloebeta900anan??supreme':
    case 'aloebeta900mlanan??supreme':
    case 'aloebeta900mililitrosanan??supreme':
        productChosen = [2];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'aqtua':
    case 'aqtuasupreme':
    case 'aqt??a':
    case 'aqt??asupreme':
    case 'actua':
    case 'actuasupreme':
    case 'act??a':
    case 'act??asupreme':
        productChosen = [3];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'biocros':
    case 'viocros':
    case 'biocro':
        productChosen = [4,5,6];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'biocrosbote':
    case 'biocrobote':
    case 'biocrosbotella':
    case 'biocrobotella':
        productChosen = [4];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'biocroscaja':
    case 'biocrocaja':
        productChosen = [5,6];
        showTheChosen (containerProductIndividual, productChosen);
        break;
    
    case 'biocrosupreme':
    case 'biocrosuprim':
    case 'biocrossupreme':
    case 'biocrossuprim':
    case 'biocroscajasupreme':
    case 'biocroscajasuprim':
    case 'biocrocajasupreme':
    case 'biocrocajasuprim':
    case 'magnus':
    case 'magnussupreme':
        productChosen = [6];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'cafezino':
    case 'cafezzino':
    case 'cafezinosupreme':
    case 'cafezzinosupreme':
    case 'cafezinoplus':
    case 'cafezzinoplus':
        productChosen = [7];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'dolcevita':
    case 'dolcevitasupreme':
        productChosen = [8];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'ego':
        productChosen = [9,10,11,12];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'egofruta':
    case 'egofrutax6':
    case 'egofrutas':
    case 'egofrutasx6':
    case 'latadeegofruta':
    case 'latadeegofrutas':
    case 'latasdeegofrutas':
        productChosen = [9];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'ego10':
    case 'egodiez':
        productChosen = [10];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'egoherbal':
    case 'egoerbal':
        productChosen = [11];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'egolife':
    case 'egolifresupreme':
    case 'egolifresuprime':
    case 'egolifresuprim':
    case 'egolai':
    case 'egolaif':
        productChosen = [12];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'estop':
    case 'estopplus':
    case 'stop':
    case 'stopplus':
    case 'estopsupreme':
        productChosen = [13];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'fem':
    case 'femplus':
    case 'femsupreme':
    case 'femsuprim':
    case 'femcaja':
    case 'fempluscaja':
    case 'femsupremecaja':
        productChosen = [14];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'fiber':
    case 'fibersupreme':
    case 'fibercaja':
    case 'fibersupremecaja':
    case 'faiber':
    case 'faibersupreme':
    case 'faibersuprim':
    case 'fibernplus':
    case "fiber'nplus":
    case "fiber'nplussupreme":
        productChosen = [15];
        showTheChosen (containerProductIndividual, productChosen);
        break;


    case 'focus':
        productChosen = [16,17];
        showTheChosen (containerProductIndividual, productChosen);
        break;


    case 'focusbote':
    case 'focusbotella':
        productChosen = [16];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'focussupreme':
    case 'focussupremecaja':
    case 'focuscaja':
        productChosen = [17];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'homo':
    case 'homoplus':
    case 'homosupreme':
    case 'homocaja':
    case 'homopluscaja':
        productChosen = [18];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'vkids':
    case 'vkid':
    case 'omnilifevkids':
    case 'omnilifevkid':
    case 'omnilaifvkid':
    case 'kid':
    case 'vikid':
    case 'vikids':
    case 'vkidssupreme':
    case 'vkidsupreme':
        productChosen = [19];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'omnilifeshakesupreme':
    case 'shake':
    case 'shakesupreme':
    case 'shakesuprime':
    case 'shakesuprim':
    case 'omnilifeshake':
    case 'omnilaifsheiq':
        productChosen = [20];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'omniost':
    case 'omiost':
    case 'omiostsupreme':
    case 'omiostsuprime':
    case 'omiostsuprim':
    case 'omniostsupreme':
    case 'omniostsuprim':
    case 'omniostsuprime':
        productChosen = [21];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'omniplus':
    case 'omiplus':
        productChosen = [22,23,24];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'omnipluscaja':
    case 'omipluscaja':
        productChosen = [22,24];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'omniplusbote':
    case 'omniplusbotella':
    case 'omiplusbote':
    case 'omiplusbotella':
        productChosen = [23];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'omniplussupreme':
    case 'omiplussupreme':
        productChosen = [24];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'omniviu':
    case 'omniviusupreme':
    case 'omniviusuprim':
    case 'omniviusuprime':
    case 'omiviu':
    case 'omiviusupreme':
    case 'omiviusuprim':
        productChosen = [25];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'onecmix':
    case 'uancmi':
    case 'onecmixplus':
    case 'cmix':
    case 'cmixplus':
    case 'onecmixsupreme':
    case 'onepermeal':
    case 'dualcmix':
        productChosen = [26];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'power':
    case 'powermaker':
    case 'pawermeiker':
    case 'powermake':
    case 'powemake':
    case 'powermaiker':
        productChosen = [27,28];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'powerbote':
    case 'powermakerbote':
    case 'pawermeikerbote':
    case 'powermakebote':
    case 'powemakebote':
    case 'powermaikerbote':
    case 'powerbotella':
    case 'powermakerbotella':
    case 'pawermeikerbotella':
    case 'powermakebotella':
    case 'powemakebotella':
    case 'powermaikerbotella':
        productChosen = [27];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'powercaja':
    case 'powermakercaja':
    case 'pawermeikercaja':
    case 'powermakecaja':
    case 'powemakecaja':
    case 'powermaikercaja':
    case 'powersupreme':
    case 'powermakersupreme':
    case 'pawermeikersupreme':
    case 'powermakesupreme':
    case 'powemakesupreme':
    case 'powermaikersupreme':
    case 'powermakercajasupreme':
    case 'powermakersupremecaja':
        productChosen = [28];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'starbien':
    case 'estarbien':
    case 'starbiencaja':
    case 'estarbiencaja':
        productChosen = [29];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'supermix':
        productChosen = [30,31];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'supermixchocolate':
    case 'chocolate':
        productChosen = [30];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'supermixsupreme':
    case 'supermixsupremevainilla':
    case 'supremevainilla':
    case 'supermixsuprim':
    case 'supermixsuprime':
    case 'supermixsuprimvainilla':
    case 'supermixsuprimevainilla':
        productChosen = [31];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'thermogenicos':
    case 'thermog??nicos':
    case 'thermogen':
    case 'termog??nicos':
    case 'termogenicos':
    case 'termogen':
        productChosen = [32,33,34,35];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'termogencoffee':
    case 'thermogencoffee':
    case 'termogencofe':
    case 'termogencoffe':
    case 'termogencofee':
    case 'thermogencoffe':
    case 'thermogencofee':
    case 'thermogencofi':
        productChosen = [32,33];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'termogencoffeebote':
    case 'thermogencoffeebote':
    case 'termogencofebote':
    case 'termogencoffebote':
    case 'termogencofeebote':
    case 'thermogencoffebote':
    case 'thermogencofeebote':
    case 'thermogencofibote':
    case 'termogencoffeebotella':
    case 'thermogencoffeebotella':
    case 'termogencofebotella':
    case 'termogencoffebotella':
    case 'termogencofeebotella':
    case 'thermogencoffebotella':
    case 'thermogencofeebotella':
    case 'thermogencofibotella':
        productChosen = [32];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'termogencoffeecaja':
    case 'thermogencoffeecaja':
    case 'termogencofecaja':
    case 'termogencoffecaja':
    case 'termogencofeecaja':
    case 'thermogencoffecaja':
    case 'thermogencofeecaja':
    case 'thermogencoficaja':
        productChosen = [33];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'thermogentealim??nsupreme':
    case 'thermogentealimonsupreme':
    case 'termogentealim??nsupreme':
    case 'termogentealimonsupreme':
    case 'thermogentealim??nsuprime':
    case 'thermogentealimonsuprime':
    case 'termogentealim??nsuprime':
    case 'termogentealimonsuprime':
    case 'thermogentealim??nsuprim':
    case 'thermogentealimonsuprim':
    case 'termogentealim??nsuprim':
    case 'termogentealimonsuprim':
    case 'thermogentealim??n':
    case 'thermogentealimon':
    case 'termogentealim??n':
    case 'termogentealimon':
    case 'thermogenlim??nsupreme':
    case 'thermogenlimonsupreme':
    case 'termogenlim??nsupreme':
    case 'termogenlimonsupreme':
    case 'thermogenlim??nsuprime':
    case 'thermogenlimonsuprime':
    case 'termogenlim??nsuprime':
    case 'termogenlimonsuprime':
    case 'thermogenlim??nsuprim':
    case 'thermogenlimonsuprim':
    case 'termogenlim??nsuprim':
    case 'termogenlimonsuprim':
    case 'thermogenlim??n':
    case 'thermogenlimon':
    case 'termogenlim??n':
    case 'termogenlimon':
        productChosen = [34];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'thermogenteamaracuy??supreme':
    case 'thermogenteamaracuyasupreme':
    case 'termogenteamaracuy??supreme':
    case 'termogenteamaracuyasupreme':
    case 'thermogenteamaracuy??suprime':
    case 'thermogenteamaracuyasuprime':
    case 'termogenteamaracuy??suprime':
    case 'termogenteamaracuyasuprime':
    case 'thermogenteamaracuy??suprim':
    case 'thermogenteamaracuyasuprim':
    case 'termogenteamaracuy??suprim':
    case 'termogenteamaracuyasuprim':
    case 'thermogenteamaracuy??':
    case 'thermogenteamaracuya':
    case 'termogenteamaracuy??':
    case 'termogenteamaracuya':
    case 'thermogenmaracuy??supreme':
    case 'thermogenmaracuyasupreme':
    case 'termogenmaracuy??supreme':
    case 'termogenmaracuyasupreme':
    case 'thermogenmaracuy??suprime':
    case 'thermogenmaracuyasuprime':
    case 'termogenmaracuy??suprime':
    case 'termogenmaracuyasuprime':
    case 'thermogenmaracuy??suprim':
    case 'thermogenmaracuyasuprim':
    case 'termogenmaracuy??suprim':
    case 'termogenmaracuyasuprim':
    case 'thermogenmaracuy??':
    case 'thermogenmaracuya':
    case 'termogenmaracuy??':
    case 'termogenmaracuya':
        productChosen = [35];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'uzo':
    case 'uso':
    case 'uzosuprime':
    case 'usosuprime':
    case 'uzosuprim':
    case 'usosuprime':
    case 'uzosupreme':
    case 'usosupreme':
    case 'uzocaja':
    case 'uzosupremecaja':
        productChosen = [36];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'supreme':
    case 'suprime':
    case 'suprim':
        productChosen = [1,2,3,4,6,8,12,15,17,20,21,24,25,28,31,34,35,36];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'plus':
        productChosen = [7,13,18,26];
        showTheChosen (containerProductIndividual, productChosen);
        break;

    case 'cafe':
        productChosen = [7,32,33];
        showTheChosen (containerProductIndividual, productChosen);
        break;
}
//     case '':


