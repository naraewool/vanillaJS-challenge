const day = document.querySelector("#clock span:first-child");
const time = document.querySelector("#clock span:last-child");

function showClock() {

// const today = new Date();

// const getYear = today.getFullYear();
// const getMonth = today.getMonth();
// const getDate = today.getDate();
// const getHour = today.getHours();
// const getMin = today.getMinutes();
// const getSec = today.getSeconds();




const today = new Date();

const getYear = today.getFullYear();
const getMonth = today.getMonth();
const getDate = today.getDate();
const getHour = today.getHours();
const getMin = today.getMinutes();
const getSec = today.getSeconds();

day.innerHTML = `Date: ${getYear}-${String(getMonth).padStart(2, "0")}-${String(getDate).padStart(2,"0")}`

//현재 시간
time.innerHTML = "Time: " + String(getHour).padStart(2, "0") + "h " + String(getMin).padStart(2, "0") + "m " + String(getSec).padStart(2, "0") + "s";


}





showClock();

setInterval(showClock, 1000);
