const clockContainer = document.querySelector(".js-clock"), 
  clockTitle = clockContainer.querySelector(".clockTitle");

function getDate(){
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const hours = checkAmPm(date.getHours());
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.textContent = `${month}월 ${day}일 ${date.getHours()>12 ? 'PM' : 'AM'} ${hours<10?`0${hours}` : hours} : ${minutes<10?`0${minutes}` : minutes} : ${seconds<10?`0${seconds}` : seconds}`
}

function checkAmPm(hours){
  if(hours > 12){
    return hours-12;
  } else {
    return hours;
  }
}

function init(){
  getDate();
  setInterval(getDate, 1000)
}

init();