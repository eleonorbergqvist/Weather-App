const temperatureConverter = (kelvin, tempUnit) => {
    var formattedTemperature = '';

    if (tempUnit === 'F°') {
      formattedTemperature = (kelvin * (9/5)) - 459.67
    }

    else {
      formattedTemperature = kelvin - 273.15;       
    }

    return formattedTemperature;
  }

export default temperatureConverter;