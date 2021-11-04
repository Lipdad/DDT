class Temperature {
    constructor(temp) {
        this.temp = temp;
    }
    get_ctof() {
        return 1.8 * temp + 32;
    }
    get_ctok() {
        return temp + 273.15;
    }
}
let temp;
do {
    temp = parseFloat(prompt("Độ C:"));
}
while (temp < -273);

let temperature = new Temperature(temp);
console.log("Độ C: " + temp);
console.log("Độ F: " + temperature.get_ctof());
console.log("Độ K: " + temperature.get_ctok());
