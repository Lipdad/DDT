class Apple {
    constructor(weight) {
        this.weight = weight;
    };
    decrease() {
        console.log(`Táo còn ${this.weight} miếng`);
        if (this.isEmpty())
            this.weight--;
    };
    isEmpty() {
        return this.weight >= 0;
    }
    getWeight() {
        return this.weight;
    }
}