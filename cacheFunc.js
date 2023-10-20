function sumCache(cache, arg1, arg2) {
    var key = "".concat(arg1, "_").concat(arg2);
    if (key in cache) {
        return cache[key];
    }
    else {
        var sum = arg1 + arg2;
        cache[key] = sum;
        return sum;
    }
}
var cache1 = {};
console.log(sumCache(cache1, 6, 2));
console.log(sumCache(cache1, 6, 2));
console.log(sumCache(cache1, 1, 4));
console.log(sumCache(cache1, 1, 4));
