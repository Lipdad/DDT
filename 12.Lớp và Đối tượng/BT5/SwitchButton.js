class SwitchButton {
    constructor() {
    };
    connectToLamp(ElectricLamp) {
        this.lamp = ElectricLamp;
    };
    switchOff() {
        this.lamp.turnOff();
    };
    switchOn() {
        this.lamp.turnOn();
    }
}