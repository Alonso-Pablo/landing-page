
/* Reemplaza una clase por otra de un elemento, y lo vuelve a hacer si se activa nuevamente, volviendo a como estaba antes  */
function replaceClass (objetiveElement, classAdd, classRemove) {
    if (objetiveElement.classList.item(1) === classRemove) {
        objetiveElement.classList.add(classAdd);
        objetiveElement.classList.remove(classRemove);
    } else {
        objetiveElement.classList.remove(classAdd);
        objetiveElement.classList.add(classRemove);
    }
};

/* Reemplaza una clase por otra de un elemento, no vuelve a reemplazar de nuevo a como estaba antes */
function replaceDisplay (objetiveElement, classAdd, classRemove) {
    let numberOfProducts = objetiveElement.length;
    for(let i = 0; i < numberOfProducts; i++) {
        if(objetiveElement[i].classList.item(1) === classRemove){
            objetiveElement[i].classList.remove(classRemove);
            objetiveElement[i].classList.add(classAdd);
        }
    }
}

/* Reemplaza una clase por otra de un conjunto de elementos seleccionados por el numero del array */
function replaceClassForClassName (objetiveElement, array, classAdd, classRemove) {
    let numberOfProducts = objetiveElement.length;
    for(let i = 0; i < numberOfProducts; i++) {

        if(!array.includes(i)){
            if(objetiveElement[i].classList.item(1) === classRemove) {
                objetiveElement[i].classList.remove(classRemove);
                objetiveElement[i].classList.add(classAdd);
            } else {
                objetiveElement[i].classList.remove(classAdd);
                objetiveElement[i].classList.add(classRemove);
            }
        }
    }
};

/* Vuelve a los otros botones-filtros al color normal (depresionado) */
function depressBtn (ObjetiveElement1, ObjetiveElement2, ObjetiveElement3) {
    if (ObjetiveElement1.classList.item(1) === "btn-pressed") {
        ObjetiveElement1.classList.remove("btn-pressed");
        ObjetiveElement1.classList.add("btn-normal")
    }
    if (ObjetiveElement2.classList.item(1) === "btn-pressed") {
        ObjetiveElement2.classList.remove("btn-pressed");
        ObjetiveElement2.classList.add("btn-normal")
    }
    if (ObjetiveElement3.classList.item(1) === "btn-pressed") {
        ObjetiveElement3.classList.remove("btn-pressed");
        ObjetiveElement3.classList.add("btn-normal")
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
        replaceClass (healthyDigestion, "btn-normal", "btn-pressed");
        tester.classList.remove("pressed");
        tester.classList.add("no-pressed");
        
        depressBtn (nutritionForYou, powerPerformance, weightControl);
    }
});


/* Main > List of products > container__product_individual > content_product > Product_details */
const price = document.getElementsByClassName("product__price");

let prices = [
    181, // ALOE 200
    925, // ALOE 900 L
    925, // ALOE 900 A
    3110,// AQTUA
    1640,// BIOCROS BOTELLA
    1640,// BIOCROS CAJA
    1730,// BIOCROS SUPREME
    1800,// CAFEZZINO PLUS
    2200,// DOLCEVITA SUPREME
    1050,// EGO FRUTAS X6
    155, // EGO 10
    155, // EGO HERBAL
    1090,// EGO LIFE SUPREME
    3230,// ESTOP PLUS
    2110,// FEM PLUS
    2460,// FIBER SUPREME
    2160,// FOCUS
    2180,// FOCUS SUPREME
    2110,// HOMO PLUS
    2100,// OMNILIFE VKIDS
    2230,// OMNILIFE SHAKE SUPREME
    2300,// OMNIOST SUPREME
    2270,// OMNIPLUS CAJA
    2240,// OMNIPLUS BOTELLA
    2310,// OMNIPLUS SUPREME
    2200,// OMNIVIU SUPREME
    1680,// ONE C MIX PLUS
    2810,// POWER MAKER
    2860,// POWER MAKER SUPREME
    1490,// STARBIEN
    2440,// SUPER MIX CHOCOLATE
    2700,// SUPERMIX SUPREME VAINILLA
    1480,// THERMOGEN COFFEE BOTELLA
    1480,// THERMOGEN COFFEE CAJA
    1680,// THERMOGEN TEA LIMON SUPREME
    2500,// THERMOGEN TEA MARACUYA SUPREME
    4380 // UZO SUPREME
];

let numberOfProducts = price.length; // 37

if (price[0].innerText === "") {
    for (let i = 0; i < numberOfProducts; i++) {
        price[i].innerText = `$ ${prices[i]}`;
    }
};

