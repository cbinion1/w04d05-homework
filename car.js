console.log("Linked");



class car  {
	constructor (color, convertible, speed) {
		this.color = "Corso Rosica";
		this.convertible = false;
		this.speed = 0;
	}
	accelerate(goFaster) {
		let oldSpeed = this.speed;
		this.speed += goFaster;
	console.log("I cant drive, 55" ${oldSpeed} to ${this.speed});
	}
	brake(slowDown) {
		let oldSpeed = this.speed;
		this.speed -= slowDown;
	console.log("Is that a cop?" ${oldSpeed} to ${this.speed});
	}
}


car.accelerate(25);
car.accelerate(75);
car.brake(55);






















