import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {

    setTimeout(() => {

      const shouldResolve = Math.random() > 0.3;
  
  if (shouldResolve) {
    // Fulfill
    resolve({ position, delay })
  } else {
    // Reject
    reject({ position, delay });
  }
}, delay);
  });
}


form.addEventListener('click', onSubmit);

function onSubmit (event) {
  event.preventDefault();

const delay = parseInt(form.delay.value);
const step = parseInt(form.step.value);
const amount = parseInt(form.amount.value);

let totalDelay = delay;
for (let i = 1; i <= amount; i++) {
    
  createPromise(i, totalDelay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  totalDelay = delay + step*i;
}
}

