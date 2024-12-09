const personPrototype = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};

function Person(name) {
    this.name = name;
}


// We then put the methods defined in personPrototype onto the Person function's prototype property using Object.assign.
Object.assign(Person.prototype, personPrototype);

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!

// It's common to see this pattern, in which methods are defined on the prototype,
// but data properties are defined in the constructor.
// That's because methods are usually the same for every object we create,
// while we often want each object to have its own value for its data properties.

const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false