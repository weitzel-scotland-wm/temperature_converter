// Set this variable to a starting Fahrenheit temperature...
var fahrenheit = 105;

// Enter conversion code below...
var fahrenheitToCelsius =(fahrenheit - 32) / 1.8;
var fahrenheitToKelvin = (fahrenheit + 459.67) / 1.8;

// Enter console.log statements below...
console.log(fahrenheit + " in fahrenheit is " + fahrenheitToCelsius + " in celsius.")
console.log(fahrenheit + " in fahrenheit is " + fahrenheitToKelvin + " in Kelvin.")
//-------------------------------------------------------------------------------------------
// Repeat the above for Celsius and Kelvin...
var celsius = 0;
var kelvin = 273.15;

var celsiusToFahrenheit = (celsius * 1.8) + 32;
var celsiusToKelvin = (celsius + 273.15);

// Console logged below:
console.log(celsius + " in celsius is " + celsiusToFahrenheit + " in fahrenheit.")
console.log(celsius + " in celsius is " + celsiusToKelvin + " in Kelvin.")
//-------------------------------------------------------------------------------------------
var kelvinToFahrenheit = (kelvin * 1.8) - 459.67;
var kelvinToCelsius = (kelvin - 273);

// Console logged below:
console.log(kelvin + " in Kelvin is " + kelvinToFahrenheit + " in fahrenheit.");
console.log(kelvin + " in Kelvin is " + kelvinToCelsius + " in celsius.");


//----------------(Part 2)-------------------//

var fahrenheitConversions = [fahrenheit, fahrenheitToCelsius, fahrenheitToKelvin];
var celsiusConversions = [celsius, celsiusToFahrenheit, celsiusToKelvin];
var kelvinConversions = [kelvin, kelvinToCelsius, kelvinToFahrenheit];

//-------------------(Part 2 Bonus 1)--------------------------//

for(i=0; i < fahrenheitConversions.length; i++){
    console.log(i)
}