const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const setTime = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const secondsInDeg = (seconds / 60) * 360 + 90;
    const minutesInDeg = (minutes / 60) * 360 + 90;
    const hoursInDeg = (hours / 12) * 360 + 90;
    if (seconds === 0) {
        secondHand.style.transition = "none";
    } else {
        secondHand.style.transition = "all 0.05s cubic-bezier(0, 3.38, 0.53, 0.42)";
    }
    if (minutes === 0) {
        minuteHand.style.transition = "none";
    } else {
        minuteHand.style.transition = "all 0.05s cubic-bezier(0, 3.38, 0.53, 0.42)";
    }
    if (hours === 0) {
        hourHand.style.transition = "none";
    } else {
        hourHand.style.transition = "all 0.05s cubic-bezier(0, 3.38, 0.53, 0.42)";
    }
    secondHand.style.transform = `rotate(${secondsInDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesInDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursInDeg}deg)`;
};
setInterval(setTime, 1000);
setTime();
