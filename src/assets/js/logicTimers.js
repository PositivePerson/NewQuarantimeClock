
//---------- SET TIMER BASE ON FUTURE MOMENT
function getTimeRemainingFuture(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClockFuture(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemainingFuture(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

//---------- SET TIMER BASE ON PAST MOMENT
function getTimeRemainingPast(startTime) {
  var t = Date.parse(new Date()) - Date.parse(startTime);
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClockPast(id, startTime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemainingPast(startTime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}


  // var deadlineFirstPoland = 'March 4 2020 08:00:00 GMT+0200';
  // var deadlineEndPoland = 'May 4 2020 01:00:00 GMT+0200';

  // var deadlineFirstFrance = 'January 24 2020 14:28:00 GMT+0200';
  // var deadlineEndFrance = 'May 4 2020 01:00:00 GMT+0200';

  // var deadlineFirstItaly = 'January 31 2020 15:30:00 GMT+0200';
  // var deadlineEndItaly = 'May 4 2020 01:00:00 GMT+0200';

  // var deadlineFirstChina = 'November 17 2019 15:30:00 GMT+0200';
  // var deadlineEndChina = 'April 20 2020 01:00:00 GMT+0200';


  // initializeClockPast('clockFirstPoland', deadlineFirstPoland);
  // initializeClockFuture('clockEndPoland', deadlineEndPoland);

  // initializeClockPast('clockFirstFrance', deadlineFirstFrance);
  // initializeClockFuture('clockEndFrance', deadlineEndFrance);

  // initializeClockPast('clockFirstItaly', deadlineFirstItaly);
  // initializeClockFuture('clockEndItaly', deadlineEndItaly);

  // initializeClockPast('clockFirstChina', deadlineFirstChina);
  // initializeClockFuture('clockEndChina', deadlineEndChina);
