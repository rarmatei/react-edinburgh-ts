interface IDog {
    id: string;
    bark: () => string;
    runSpeed: number;
}

interface IFish {
    id: number;
    swim: () => void;
    swimSpeed: number;
}

type IPet = IDog | IFish;

function playWithPet(pet: IPet) {
    
}

  export {};