type MyCache = {
    [key: string]: number;
};

function sumCache(cache: MyCache, arg1: number, arg2: number): number {
    const key: string = `${arg1}_${arg2}`;

    if (key in cache) {
        return cache[key];
    } else {
        const sum: number = arg1 + arg2;
        cache[key] = sum;
        return sum;
    }
}

const cache1: MyCache = {};
console.log(sumCache(cache1, 6, 2));
console.log(sumCache(cache1, 6, 2));
console.log(sumCache(cache1, 1, 4));
console.log(sumCache(cache1, 1, 4));
