// function replaceDisplay (objetiveElement, classAdd, classRemove) {
//     let numberOfProducts = objetiveElement.length;
//     console.log(objetiveElement)
//     for(let i = 0; i <= numberOfProducts; i++) {
//         console.log(objetiveElement[i].classList.item(1))
//         if(objetiveElement[i].classList.item(1) === classRemove){

//             objetiveElement[i].classList.remove(classRemove);
//             objetiveElement[i].classList.add(classAdd);
//         }
//     }
// }

function replaceClass (objetiveElement, classAdd, classRemove) {
    if (objetiveElement.classList.item(1) === classRemove) {
        objetiveElement.classList.add(classAdd);
        objetiveElement.classList.remove(classRemove);
    } else {
        objetiveElement.classList.remove(classAdd);
        objetiveElement.classList.add(classRemove);
    }
};

function replaceClassForClassName (objetiveElement, number1, number2, number3, number4, number5, number6, number7, number8, classAdd, classRemove) {
    let numberOfProducts = objetiveElement.length;
    for(let i = 0; i <= numberOfProducts; i++) {

        if(i != number1 && i != number2 && i != number3 && i != number4 && i != number5 && i != number5 && i != number6 && i != number7 && i != number8){
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

/* Main > main__filters__container */
const nutritionForYou = document.getElementById("nutrition-for-you");
const weightControl = document.getElementById("weight-control");
const powerPerformance = document.getElementById("power-performance");
const healthyDigestion = document.getElementById("healthy-digestion");

const containerProductIndividual = document.getElementsByClassName("container__product_individual")

function replaceClassForClassName (objetiveElement, number1, number2, number3, number4, number5, number6, number7, number8, classAdd, classRemove) {
    let numberOfProducts = objetiveElement.length;
    console.log(objetiveElement)
    for(let i = 0; i <= numberOfProducts; i++) {

        if(i != number1 && i != number2 && i != number3 && i != number4 && i != number5 && i != number5 && i != number6 && i != number7 && i != number8){
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

nutritionForYou.addEventListener("click", () => {
    replaceClassForClassName(containerProductIndividual, 19, 20, 22, 23, 24, 30, 31, null, "displayFlex", "displayNone");
    replaceClass (nutritionForYou, "btn-normal", "btn-pressed");
});

weightControl.addEventListener("click", () => {
    replaceClassForClassName(containerProductIndividual, 7, 8, 15, 32, 33, 34, 35, null, "displayFlex", "displayNone");
    replaceClass (weightControl, "btn-normal", "btn-pressed");
});

powerPerformance.addEventListener("click", () => {
    replaceClassForClassName(containerProductIndividual, 3, 4, 5, 6, 10, 12, 27, 28, "displayFlex", "displayNone");
    replaceClass (powerPerformance, "btn-normal", "btn-pressed");
});

healthyDigestion.addEventListener("click", () => {
    replaceClassForClassName(containerProductIndividual, 0, 1, 2, 9, 11, 15, null, null, "displayFlex", "displayNone");
    replaceClass (healthyDigestion, "btn-normal", "btn-pressed");
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

let numberOfProducts = price.length; // 36

if (price[0].innerText === "") {
    for (let i = 0; i < numberOfProducts; i++) {
        price[i].innerText = `$ ${prices[i]}`;
    }
};

