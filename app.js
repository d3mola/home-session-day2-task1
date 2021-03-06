function Car(name, model, type) {
	this.type = type;
	this.name = name || 'General';
	this.model = model || 'GM';

	this.speed = '0 km/h';


	if((this.model === 'Porshe') || (this.name === "Koengsegg")) {
		this.numOfDoors = 2;
	}
	else {
		this.numOfDoors = 4;
	}


	if(this.type === 'trailer') {
		this.numOfWheels = 8;
		this.isSaloon = false;
	}
	else {
		this.numOfWheels = 4;
		this.isSaloon = true;
	}


    Car.prototype.drive = function(n){
        if(this.type === 'trailer'){
           this.speed = ( 11 * n )+' km/h';
        }
    
        else{
            this.speed =(50 * n)+' km/h';
            }
        return this;
        } 

}
module.exports = Car;