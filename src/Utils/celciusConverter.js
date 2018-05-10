const celciusConverter = (celcius, tempUnit) => {
    var formattedTemperature = '';

    if (tempUnit === 'F°') {
      formattedTemperature = (celcius * (9/5)) + 32
    }

    else {
      formattedTemperature = celcius;       
    }

    return formattedTemperature;
  }

export default celciusConverter;