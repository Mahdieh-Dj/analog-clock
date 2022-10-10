let hours;
let minutes;
let seconds;
setInterval(getTime, 100);
function getTime() {
  const date = new Date();
  hours = "0" + date.getHours();
  minutes = "0" + date.getMinutes();
  seconds = "0" + date.getSeconds();
  hours = hours.slice(-2);
  minutes = minutes.slice(-2);
  seconds = seconds.slice(-2);
  document.getElementById("hour").innerHTML =
    hours + ": " + minutes + ": " + seconds;
  document
    .querySelector(".hourhand")
    .setAttribute(
      "style",
      `transform:rotate(${hours * 30 + (minutes / 60) * 30}deg)`
    );
  document
    .querySelector(".secondhand")
    .setAttribute("style", `transform:rotate(${seconds * 6}deg)`);
  document
    .querySelector(".minutehand")
    .setAttribute("style", `transform:rotate(${minutes * 6}deg)`);
}
