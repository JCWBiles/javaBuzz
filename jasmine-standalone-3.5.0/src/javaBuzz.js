var Javabuzz = function(){}

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};