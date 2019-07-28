interface IDog {
    name: string;
    bark: () => string;
    runSpeed: number;
}

interface IFish {
    name: string;
    swim: () => void;
    swimSpeed: IDog['runSpeed'];
}

type IPet = IDog | IFish;
type IDogFishMutant = IDog & IFish;


function playWithPet(pet: IPet) {
    if("swim" in pet) {
        pet.swimSpeed;
        return;
    }
    pet.bark();
}

  export {};