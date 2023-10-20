//Zadanie 1
console.log("Pierwszy skrypt - działa");

//Zadanie 2
let tablica = [1, 5, 3, 7, 9, 2];
console.log(tablica);
tablica.pop();
console.log("Długość tablicy = " + tablica.length + "\nZawartość tablicy : " + tablica);

//Zadanie 3
function wstaw(tab, p, el){
    let new_tab = tab;
    if(p === 0)
        new_tab.unshift(el);
    else if(p === 1)
        new_tab.push(el);
    else
        console.log("Illegal argument");
    return new_tab;
}

console.log(wstaw(tablica, 10, 11));
console.log(wstaw(tablica, 0, 11));
console.log(wstaw(tablica, 1, 22));

//Zadanie 4
function split_txt(text){
    let arr = text.split('.');
    let new_arr = arr.map(function (x) {
        return Math.pow(x, 2);});
    return new_arr.join('.');
}
console.log(split_txt('1.2.3.4.5.6.7.8.9'));

//Zadanie 5
const poleKwadratu = (a) => a * a;
console.log(poleKwadratu(5));
console.log(poleKwadratu(50));

//Zadanie 6
function losowanie(osoby){
    return osoby[Math.floor(Math.random() * osoby.length)];
}
const students = ["Olek", "Janek", "Stefan", "Tymek", "Sławek"];
console.log(losowanie(students));

//Zadanie 7
function myFunction(ilosc, time) {
    let count = 0;

    function losuj() {
        if (count < ilosc) {
            let liczba = Math.floor(Math.random() * 1000); // Losuje liczby od 1 do 100
            console.log(liczba);
            count++;
            setTimeout(losuj, time * 1000);
        }
    }
    losuj();
}
myFunction(3, 0.5);

//--------
const conTest = (text, time) => {
    setInterval(() => {
        console.log("Witaj " + text + '!');
    }, time);
};
conTest('Kamil', 3000);
