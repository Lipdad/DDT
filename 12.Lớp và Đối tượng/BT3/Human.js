class Human {
    constructor(name, sex, weight) {
        this.name = name;
        this.sex = sex;
        this.weight = weight;
    };
    isMale() {
        return this.sex;
    }
    setGender(sex) {
        if (isMale)
            this.sex = true;
        else
            this.sex = false;
    };
    getName() {
        return this.name;
    };
    setName(name) {
        this.name = name;
    };
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    eat(apple) {
        apple.decrease();
        if (apple.isEmpty()) {
            this.weight++;
            this.setWeight(this.weight);
        }
    };
    say() {
        console.log(`Tôi là ${this.name} đã ăn một miếng`);
    }

}