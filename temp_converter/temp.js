function convertTemperature() {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");

    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  
    var resultElement = document.getElementById("result");
    resultElement.textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F.";
  }
  