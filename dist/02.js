const ali = {
    name: 'Ali',
    age: 34
};
function printName(person) {
    console.log(person.name);
}
printName({ age: 32, name: 'John' });
const people = [
    ali,
    { name: 'Jemma', age: 25 }
];
people.map((index, person) => {
    return person.name.toUpperCase();
});
