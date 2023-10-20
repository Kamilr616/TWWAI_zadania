//Zadanie 8
function isEven (arr){
    return arr.filter(function (x) {return x % 2 !== 0;});
}

module.exports = {
    isEven: isEven
}
