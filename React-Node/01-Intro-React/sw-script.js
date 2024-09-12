let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let hours = document.getElementById('hour');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');

let hour = 0;
let min = 0;
let sec = 0;

let interval;

start.addEventListener('click', function () {
  interval = setInterval(function () {
    if (sec < 59) {
      sec += 1;
      secs.innerHTML = sec < 10 ? ' 0' + sec : sec;
    } else {
      sec = 0;
      secs.innerHTML = sec;
      if (min < 59) {
        min += 1;
        mins.innerHTML = min < 10 ? '0' + min + ':' : min + ':';
      } else {
        min = 0;
        hour += 1;
        hours.innerHTML = hour < 10 ? '0' + hour + ':' : hour + ':';
      }
    }
  }, 1000);
});

stop.addEventListener('click', function () {
  clearInterval(interval);
});

reset.addEventListener('click', function () {
  //window.location.reload();
  clearInterval(interval);
  sec = 0;
  hour = 0;
  min = 0;
  hours.innerHTML = '00 :';
  mins.innerHTML = '00 :';
  secs.innerHTML = '00';
});
