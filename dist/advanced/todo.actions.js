export class Add {
    constructor(payload) {
        this.payload = payload;
        this.type = "Add";
    }
}
export class RemoveAll {
    constructor() {
        this.type = "Remove All";
    }
}
export class RemoveOne {
    constructor(payload) {
        this.payload = payload;
        this.type = "Remove One";
    }
}
