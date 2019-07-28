import * as _ from 'lodash';

const firstName = "Chris";
firstName.includes("hr");

//MAKE this a more real example
function thisReturnTrue() {
  return true;
}

if (thisReturnTrue() === true) {
  console.log("I SHOULD SEE THIS");
} else {
  console.log("THIS SHOULD NOT HAPPEN...");
}

//add lodash and talk about npm install @types/project-name if it doesn't come with
