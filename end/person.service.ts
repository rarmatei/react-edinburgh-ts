import { IPerson } from "Person";

let ali: IPerson = {
    age: 26,
    name: 'Ali'
};

function printName(person: IPerson) {
    console.log(person.name);
}

printName({age: 32, name: 'John'});




















const people = [
    ali,
    {name: 'Jemma3', age: 25}
];

let names = people.map((person, index) => {
    return person.name;
})