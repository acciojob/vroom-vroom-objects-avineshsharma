// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

function SportsCar(make, model, topSpeed) {
	super(make);
	super(model);
	this.topSpeed = topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
