const countdown = () => {
  // Specify the date and time we are counting down to
  const countDate = new Date("April 7, 2023 00:00:00").getTime();
  const now = new Date().getTime();

  // Calculate remaining time
  const remainingTime = countDate - now;

  // work out the time in days, hours, minutes
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);

  // update html with the calculated values
  // check if the time is past 0
  document.querySelector(".day").textContent = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").textContent = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").textContent = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").textContent = textSecond > 0 ? textSecond : 0;
}

// run the countdown every 500 ms to display the time
setInterval(countdown, 500);