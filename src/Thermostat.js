function Thermostat() {
	this.defaultTemperature = 20;
	this.minTemperature = 10;
	this.maxPowerSaveOnTemperature = 25;
	this.maxPowerSaveOffTemperature = 32;
	this.temperature = this.defaultTemperature;
	this.isPowerSaveOn = true;
	this.maxTemperature = this._setMaxTemperature();
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if(this._isAboveMaxTemperature(degrees)) return this.temperature = this.maxTemperature;
	return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this._isBelowMinTemperature(degrees)) return this.temperature = this.minTemperature
	return this.temperature -= degrees;
};

Thermostat.prototype.turnPowerSaveOff = function() {
	this.isPowerSaveOn = false;
	this._setMaxTemperature();
};

Thermostat.prototype.turnPowerSaveOn = function() {
	this.isPowerSaveOn = true;
	this._setMaxTemperature();
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = this.defaultTemperature;
};


Thermostat.prototype._isAboveMaxTemperature = function(degrees) {
	return this.temperature + degrees > this.maxTemperature;
};

Thermostat.prototype._isBelowMinTemperature = function(degrees) {
	return this.temperature - degrees < this.minTemperature;
};

Thermostat.prototype._setMaxTemperature = function() {
	return this.maxTemperature= this.isPowerSaveOn ? this.maxPowerSaveOffTemperature : this.maxPowerSaveOnTemperature;
};

// Thermostat.prototype._isAboveMaxPowerSaveTemperature = function(degrees) {
// 	return this.isPowerSaveOn && this.temperature + degrees > this.maxPowerSaveTemperature;
// };

// if(this._isAboveMaxPowerSaveTemperature(degrees)) return this.temperature = this.maxPowerSaveTemperature;