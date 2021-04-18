// const listOfPrice = {
//     aloe200: 181,
//     aloe900: 925,
//     aqtuaS: 3110,
//     biocros: 1640,
//     biocrosS: 1730,
//     cafezzinoPlus: 1800,
//     dolcevitaS: 2200,
//     egoFruta: 1050,
//     ego10: 155,
//     egoHerbal: 155,
//     egoLifeS: 1090,
//     estopPlus: 3230,
//     femPlus: 2110,
//     fiberS: 2460,
//     focus: 2160,
//     focusS: 2180,
//     homoPlus: 2110,
//     omnilifeVkids: 2100,
//     omnilifeShakeS: 2230,
//     omniostS: 2300,
//     omniplusBox: 2270,
//     omniplusBottle: 2240,
//     omniplusS: 2310,
//     omniviuS: 2200,
//     oneCMixPlus: 1680,
//     powerMaker: 2810,
//     powerMakerS: 2860,
//     starbien: 1490,
//     superMixCholocate: 2440,
//     superMixS: 2700,
//     thermogenCoffee: 1480,
//     thermogenTeaLimonS: 1680,
//     thermogenTeaMaracuyaS: 2500,
//     uzoSupreme: 4380,
// }
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
    console.log(`Hola hay ${numberOfProducts} productos en la pagina`);
    for (let i = 0; i < numberOfProducts; i++) {
        console.log("hola" + i)
        price[i].innerText = `$ ${prices[i]}`;
    }
}
