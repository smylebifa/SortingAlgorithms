setInterval(function () {
  var date = new Date();

  var year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hour = date.getHours(),
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  month++;

  month = (month < 10) ? '0' + month : month;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  hour = (hour < 10) ? '0' + hour : hour;
  seconds = (seconds < 10) ? '0' + seconds : seconds;


  var weekDays =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var weekDay = weekDays[date.getDay()];

  var time = hour + ':' + minutes + ':' + seconds + ', ' + weekDay + ' (' + day + '.' + month + '.' + year + ')';

  document.getElementById("time").innerHTML = time;

}, 500);