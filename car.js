console.log("Linked");



class car  {
	constructor (color, convertible, speed) {
		this.color = color;
		this.convertible = convertible;
		this.speed = speed;
	}
	accelerate() {
		if (this.speed >= 0)
		return this.speed++;
	console.log("I cant drive, 55");
	}
	brake() {
		if (this.speed > 0)
		return this.speed--;
	console.log("Is that a cop?");
	}
}

const ferrari = new car("Rosso Corsica", true, 0);

module.exports.ferrari.accelerate(){
	console.log(this.speed);
}

module.exports.ferrari.brake(){
	console.log(this.speed);
}























