// vehicle and ship

const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name}` + ' is moving');
    },
    stop() {
        console.log(`${this.name}` + ' stopped');
    },
};

const ship = {
    startMachine() {
        console.log(`${this.name}` + ' lifting anchor up');
    },
    stopMachine() {
        console.log(`${this.name}` + ' lifting anchor down');
    },
    __proto__: vehicle,
    
}

export { vehicle, ship };

// vehicle.move();
// vehicle.stop();
// console.log(vehicle);
// ship.startMachine();
// ship.stopMachine();
// console.log(ship);