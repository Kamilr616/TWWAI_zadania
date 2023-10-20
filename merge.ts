function mergeArrays<T>(array1: T[], array2: T[]): T[] {
    return [...array1, ...array2];
}

const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];

const mergedArray: number[] = mergeArrays(array1, array2);
console.log("Połączone tablice: " + mergedArray);