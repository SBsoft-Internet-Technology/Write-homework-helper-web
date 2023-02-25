var countdownElement = document.getElementById("countdown");
var startButton = document.getElementById("start-button");

startButton.addEventListener("click", function() {
  var hoursInput = document.getElementById("countdown-hours");
  var minutesInput = document.getElementById("countdown-minutes");
  var secondsInput = document.getElementById("countdown-seconds");

  var hours = parseInt(hoursInput.value);
  var minutes = parseInt(minutesInput.value);
  var seconds = parseInt(secondsInput.value);

  var countdownDate = new Date();
  countdownDate.setHours(countdownDate.getHours() + hours);
  countdownDate.setMinutes(countdownDate.getMinutes() + minutes);
  countdownDate.setSeconds(countdownDate.getSeconds() + seconds);

  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = hours + "时"
                                  + minutes + "分"
                                  + seconds + "秒";

    if (distance < 0) {
      clearInterval(x);
      countdownElement.innerHTML = "到时间力";
    }
  }, 1000);
});

