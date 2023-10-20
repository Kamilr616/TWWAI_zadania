class Animal{
    constructor(public name: string) {}

    sound(): string {
        return "???";
    }
}
class Dog extends Animal{
    constructor(name: string) {
        super(name);
    }

    sound(): string {
        return "Hau!";
    }
}

class Cat extends Animal{
    constructor(name: string) {
        super(name);
    }

    sound(): string {
        return "Miau!";
    }
}

const pies = new Dog("Burek");
const kot = new Cat("Bazyl");

console.log(pies.name + " robi: " + pies.sound());
console.log(kot.name + " robi: " + kot.sound());