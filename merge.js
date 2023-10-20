var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeArrays(array1, array2) {
    return __spreadArray(__spreadArray([], array1, true), array2, true);
}
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var mergedArray = mergeArrays(array1, array2);
console.log("Połączone tablice: " + mergedArray);
