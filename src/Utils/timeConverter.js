const timeConverter = (unixtime) => {
    var date = new Date(unixtime*1000);
    var hours = date.getHours();
    var minutes = ("0" + date.getMinutes()).substr(-2)

    return hours + ':' + minutes;
}

export default timeConverter;

