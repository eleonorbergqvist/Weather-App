function timeConverter(unixtime) {

    var date = new Date(unixtime*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);

    return formattedTime;
  }

export default timeConverter;

