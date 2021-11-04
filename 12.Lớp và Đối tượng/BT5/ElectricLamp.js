class ElectricLamp {
    constructor() {
    };
    ElectricLamp(status){
        this.status = false;
    };
    turnOn(){
        this.status = true;
        console.log(this.status);
    };
    turnOff(){
        this.status = false;
        console.log(this.status);
    }
}