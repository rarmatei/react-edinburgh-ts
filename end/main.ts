import * as _ from 'lodash';

const firstCat = "Felix";
const secondCat = "Yuki";

firstCat.includes("elix");

const allCats = [firstCat, secondCat];
allCats.splice(0,2);

function isMyComputerOn() {
  return true;
}

if (isMyComputerOn() === true) {
  console.log("YOUR COMPUTER IS ON");
} else {
  console.log("IT'S OFF!");
}

_.times(3, () => {

});