class Battery {
    constructor() {
        this.energy = 0;
    }
    setEnergy(energy) {
        this.energy = energy;
    };
    getEnergy() {
        return this.energy;
    };
    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
};
class FlashLamp {
    constructor(battery) {
        this.status = false;
        this.battery = battery;
    }
    setBattery(battery) {
        this.battery = battery;
    };
    getBatteryInfo() {
        return this.battery.getEnergy();
    };

    light() {
        if (this.status) {
            alert("Lighting");
        }
        else {
            alert("Not lighting");
        }
    };
    turnOn() {
        this.status = true;
        this.battery.decreaseEnergy();
    };
    turnOff() {
        this.status = false;
    };
    getstt() {
        return this.status;
    }

};
let battery = new Battery();
battery.setEnergy(10);

let flashlamp = new FlashLamp(battery);
flashlamp.setBattery(battery);

let turnon_bt = document.getElementById("turnon");
let turnoff_bt = document.getElementById("turnoff");
let stt_bt = document.getElementById("switch");
let stt = flashlamp.getstt();
turnon_bt.addEventListener('click', function () {
    flashlamp.turnOn();
    console.log("Battery info: " + flashlamp.getBatteryInfo() + "<br/>");
    stt_bt.innerText = "Turn on";
    console.log(stt);
});
turnoff_bt.addEventListener('click', function () {
    flashlamp.turnOff();
    console.log("Battery info: " + flashlamp.getBatteryInfo() + "<br/>");
    stt_bt.innerText = "Turn off";
    console.log(stt);
});



/* document.write("Battery info: " + flashlamp.getBatteryInfo() + "<br/>");
flashlamp.light();

document.write("Turn on<br/>");
flashlamp.turnOn();
flashlamp.light();
document.write("Battery info: " + flashlamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>");
flashlamp.turnOff();
flashlamp.light(); */