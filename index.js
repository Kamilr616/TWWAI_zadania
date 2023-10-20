//Zadanie 8
let service = require('./service');

let tablica = [2, 6, 3, 7, 33, 6];
let new_tab = service.isEven(tablica);

new_tab.forEach(function (liczba) {
    console.log(liczba);
});