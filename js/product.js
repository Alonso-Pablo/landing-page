function replaceClass (objetiveElement, classAdd, classRemove) {
    if ( objetiveElement.classList.item(1) === classRemove) {
        objetiveElement.classList.add(classAdd);
        objetiveElement.classList.remove(classRemove);
    } else {
        objetiveElement.classList.remove(classAdd);
        objetiveElement.classList.add(classRemove);
    }
};

/* Main > main__filters__container */
const nutritionForYou = document.getElementById("nutrition-for-you");
const weightControl = document.getElementById("weight-control");
const powerPerformance = document.getElementById("power-performance");
const healthyDigestion = document.getElementById("healthy-digestion");

const containerProductIndividual = document.getElementsByClassName("container__product_individual")
nutritionForYou.addEventListener("click", () => {
    containerProductIndividual[0]
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
]

let numberOfProducts = price.length; // 36

if (price[0].innerText === "") {
    for (let i = 0; i < numberOfProducts; i++) {
        price[i].innerText = `$ ${prices[i]}`;
    }
};

