// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';


const btnStartEl = document.querySelector('[data-start]');
const dayEl = document.querySelector("[data-days]");
const hourEl = document.querySelector('[data-hours]');
const minuteEl = document.querySelector('span[data-minutes]');
const secondEl = document.querySelector('span[data-seconds]');

btnStartEl.disabled = true;

const options = {
    enableTime: true, //Включает устройство выбора времени
    time_24hr: true, //Отображает устройство выбора времени в 24-часовом режиме без выбора AM/PM, если включено.
    defaultDate: new Date(), //Устанавливает первоначальную выбранную дату (даты).Если вы используете режим: "multiple" или календарь диапазонов, предоставьте массив объектов Date или массив строк дат, которые соответствуют вашему формату dateFormat.В противном случае вы можете предоставить один объект Date или строку даты.
    minuteIncrement: 1, //Регулировка шага для ввода минут (вкл. прокрутку)
    onClose(selectedDates) {// Функция(и), срабатывающая при каждом закрытии календаря
        const selectedDate = selectedDates[0];
        if (selectedDate < new Date()) {
        console.log(selectedDates[0]);
        Notiflix.Notify.warning('Please choose a date in the future');
        return;
        }
        btnStartEl.disabled = false;
        
    },
  };

  
 const startTime =  flatpickr("#datetime-picker", options);

  btnStartEl.addEventListener("click", () => {
    const selectedDate = startTime.selectedDates[0];
    btnStartEl.disabled = true;

    const countdown = setInterval(() => {
        const currentTime = new Date();
        const deltaTime = selectedDate - currentTime;
        
        if (deltaTime <= 0) {
            clearInterval(countdown);
            return;
            console.dir(deltaTime);
        }
        let result = convertMs(deltaTime);
        dayEl.textContent = addLeadingZero(result.days);
        hourEl.textContent = addLeadingZero(result.hours);
        minuteEl.textContent = addLeadingZero(result.minutes);
        secondEl.textContent = addLeadingZero(result.seconds);
        
    }, 1000);
  }
  );



  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//   function addLeadingZero(value) {
//     let valueStr = value.toString();
//     if (valueStr.length < 2) {
//         return valueStr.padStart(2, '0');
//     }
//     return valueStr;
//   }

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

function setDocumentStyle() {

}

//document.body.style.background = `linearGradient(0deg, rgba(35,228,226,1) 0%, rgba(251,242,50,1) 100%)`;

const inputEl = document.querySelector("#datetime-picker");

inputEl.style.background = "rgba(251,242,50,1)";
inputEl.style.margin = "50px";
inputEl.style.marginRight = "40px";
inputEl.style.marginLeft = "auto";
inputEl.style.fontSize = "30px";
inputEl.style.textAlign = "center";
inputEl.style.border = 'solid';
inputEl.style.borderColor = 'blue';
inputEl.style.borderRadius = '20px';



btnStartEl.style.fontSize = "30px";
btnStartEl.style.textAlign = "center";
btnStartEl.style.border = 'solid';
btnStartEl.style.borderColor = 'blue';
btnStartEl.style.borderRadius = '20px';


const timerEl = document.querySelector('.timer');
timerEl.style.display = "flex";
timerEl.style.paddingTop = "100px";
timerEl.style.paddingBottom = "800px";
timerEl.style.gap = "10px";
timerEl.style.alignItems = "center";
timerEl.style.justifyContent = "center";


const fieldEl = document.querySelectorAll('.field');

for (let i = 0; i < fieldEl.length; i++) {
fieldEl[i].style.fontSize = "25px";
fieldEl[i].style.border = 'solid';
fieldEl[i].style.borderRadius = '20px';
fieldEl[i].style.borderColor = 'blue';
}


