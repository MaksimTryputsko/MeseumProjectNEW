import './index.scss'
import IMask from 'imask';
import { swiper, swiper2, swiper3 } from './modules/swiper';
import { openModal } from './modules/openModal';
import { map } from './modules/map'
import { handleClick,burgerChange } from './modules/scroll';

const totalSum = document.querySelector('.tickets__inf__calc__amount__total')
const radioBtns = document.querySelectorAll('input[type="radio"]')
const totalModalSum = document.querySelector('.totalSumGeneral')

const ticketsModalBasik = document.querySelector('.quantinyOfBasic')
const ticketsModalSenior = document.querySelector('.quantinyOfSenior')

const totalSumOfBasikModal = document.querySelector('.totalSumOfBasic')
const totalSumOfSeniorModal = document.querySelector('.totalSumOfSenior')

const basicPriceFirst = document.querySelector('.basicPriceFirst')
const seniorPriceFirst = document.querySelector('.seniorPriceFirst')
const basicPriceSecond = document.querySelector('.SumOfBasic')
const seniorPriceSecond = document.querySelector('.SumOfSenior')

const createStyleFlex = document.querySelector('.inputItems__entry-ticket__value2')
const blockRadioBtns = document.querySelector('.tickets__inf__calc__items')

const addOne = 1
let sum = 30;

function radioHelper(item, priceBasik, priceSenior) {
  sum = (parseInt(countInput.value) * priceBasik) + (parseInt(countInput2.value) * priceSenior)
  totalSum.innerHTML = `Total € ${sum}`
  totalModalSum.innerHTML = sum;
  selectTicket.value = item.value
  valueTicketsSpan.innerHTML = item.innerHTML
  valueTicketsSpan.innerHTML = item.innerHTML
  totalSumOfBasikModal.innerHTML =  priceBasik * parseInt(countInput.value)
  totalSumOfSeniorModal.innerHTML = priceSenior * parseInt(countInput2.value)

  basicPriceFirst.innerHTML = priceBasik
  seniorPriceFirst.innerHTML = priceSenior

  basicPriceSecond.innerHTML = priceBasik
  seniorPriceSecond.innerHTML = priceSenior

  createStyleFlex.classList.remove('testGap')
}

function testRadio (arg) {
  sum = 0

  if(arg === 'first' || arg === 'firstT') {
    radioHelper(options[0],priceFirstTicketBasic,priceFirstTicketSenior)
    return
  }

  if(arg === 'second' || arg === 'secondT') {
    radioHelper(options[1],priceSecondTicketBasic,priceSecondTicketSenior)
    return
  } 

  if (arg === 'third' || arg === 'thirdT') {
    radioHelper(options[2],priceThirdTicketBasic,priceThirdTicketSenior)
    return
  }
}

function btnInputValues (input, typeOfTicket, inputFinish, unitsTest, isPlus) {
  input.value = parseInt(input.value) + isPlus + unitsTest;
  typeOfTicket.innerHTML = input.value
  inputFinish.value = input.value;
}

function helperBtnCalculation(price, finishSum) {
  sum = sum + price;
  totalSum.innerHTML = `Total € ${sum}`
  totalModalSum.innerHTML = sum;
  finishSum.innerHTML = +(finishSum.innerHTML) + price;
}

const priceFirstTicketBasic = 20;
const priceFirstTicketSenior = 10;

const priceSecondTicketBasic = 25;
const priceSecondTicketSenior = 12.5;

const priceThirdTicketBasic = 40;
const priceThirdTicketSenior = 20;

blockRadioBtns.addEventListener('click',(event) => {
  let arr = Array.from(radioBtns)

  if(arr.includes(event.target)) {
    testRadio(event.target.value)
  }
})

const wrapper = document.querySelector('wr');
const countInput = document.getElementById('count');
const butM = document.getElementById('bminus');
const butP = document.getElementById('bplus');
const units = countInput.value.replace(/\d/g, '');

butP.addEventListener('click', function() { 
  btnInputValues(countInput, ticketsModalBasik, countInput3, units, addOne);

  if(radioBtns[0].checked) {
    helperBtnCalculation(priceFirstTicketBasic, totalSumOfBasikModal)
  }

  if(radioBtns[1].checked) {
    helperBtnCalculation(priceSecondTicketBasic, totalSumOfBasikModal)
    return
  } 

  if(radioBtns[2].checked) {
    helperBtnCalculation(priceThirdTicketBasic, totalSumOfBasikModal)
    return
  }
})
  
butM.addEventListener('click', function() {
  if(parseInt(countInput.value) > 1) {
      btnInputValues(countInput, ticketsModalBasik, countInput3, units, -addOne)

      if(radioBtns[0].checked) {
        helperBtnCalculation(-priceFirstTicketBasic, totalSumOfBasikModal);
        return
      } 

      if(radioBtns[1].checked) {
        helperBtnCalculation(-priceSecondTicketBasic, totalSumOfBasikModal);
        return
      } 

      if(radioBtns[2].checked) {
        helperBtnCalculation(-priceThirdTicketBasic, totalSumOfBasikModal);
        return
      }
  }
})
        
const wrapper2 = document.querySelector('wr2');
const countInput2 = document.getElementById('count2');
const butM2 = document.getElementById('bminus2');
const butP2 = document.getElementById('bplus2');
const units2 = countInput2.value.replace(/\d/g, '');

butP2.addEventListener('click', function() {
  btnInputValues(countInput2, ticketsModalSenior, countInput4, units2, addOne);

  if(radioBtns[0].checked) {
    helperBtnCalculation(priceFirstTicketSenior, totalSumOfSeniorModal)
    return
  } 

  if(radioBtns[1].checked) {
    helperBtnCalculation(priceSecondTicketSenior, totalSumOfSeniorModal)
    return
  } 

  if(radioBtns[2].checked) {
    helperBtnCalculation(priceThirdTicketSenior, totalSumOfSeniorModal)
    return
  }
})
   
butM2.addEventListener('click', function() {
  if(parseInt(countInput2.value) > 1) {
      btnInputValues(countInput2, ticketsModalSenior, countInput4, units2, -addOne)

      if(radioBtns[0].checked) {
        helperBtnCalculation(-priceFirstTicketSenior, totalSumOfSeniorModal);
        return
      } 

      if(radioBtns[1].checked) {
          helperBtnCalculation(-priceSecondTicketSenior, totalSumOfSeniorModal);
          return
      }

      if(radioBtns[2].checked) {
          helperBtnCalculation(-priceThirdTicketSenior, totalSumOfSeniorModal);
          return
      }
  }
})

const openBtn = document.getElementById('openBtn')
openBtn.addEventListener('click', openModal)

IMask(document.getElementById('phone'),{
  mask: '+{375}(00)00-00-000',
})

const wrapper3 = document.querySelector('wr3');
const countInput3 = document.getElementById('count3');
const butM3 = document.getElementById('bminus3');
const butP3 = document.getElementById('bplus3');
const units3 = countInput3.value.replace(/\d/g, '');

butP3.addEventListener('click', function() {
  btnInputValues(countInput3, ticketsModalBasik, countInput, units3, addOne);

  if(selectTicket.value === 'firstT') {
    helperBtnCalculation(priceFirstTicketBasic, totalSumOfBasikModal)
    return
  }

  if(selectTicket.value === 'secondT') {
    helperBtnCalculation(priceSecondTicketBasic, totalSumOfBasikModal)
    return
  } 

  if(selectTicket.value === 'thirdT') {
    helperBtnCalculation(priceThirdTicketBasic, totalSumOfBasikModal)
    return
  }
})

butM3.addEventListener('click', function() {
  if(parseInt(countInput3.value) > 1) {
      btnInputValues(countInput3, ticketsModalBasik, countInput, units3, -addOne)

      if(selectTicket.value === 'firstT') {
        helperBtnCalculation(-priceFirstTicketBasic, totalSumOfBasikModal);
        return
      } 

      if(selectTicket.value === 'secondT') {
        helperBtnCalculation(-priceSecondTicketBasic, totalSumOfBasikModal);
        return
      } 
      
      if(selectTicket.value === 'thirdT') {
        helperBtnCalculation(-priceThirdTicketBasic, totalSumOfBasikModal);
        return
      }
  }
})   
        
const wrapper4 = document.querySelector('wr4');
const countInput4 = document.getElementById('count4');
const butM4 = document.getElementById('bminus4');
const butP4 = document.getElementById('bplus4');
const units4 = countInput4.value.replace(/\d/g, '');

butP4.addEventListener('click', function() {
  btnInputValues(countInput4, ticketsModalSenior, countInput2, units4, addOne);

  if(selectTicket.value === 'firstT') {
    helperBtnCalculation(priceFirstTicketSenior, totalSumOfSeniorModal)
    return
  }

  if(selectTicket.value === 'secondT') {
    helperBtnCalculation(priceSecondTicketSenior, totalSumOfSeniorModal)
    return
  } 

  if(selectTicket.value === 'thirdT') {
    helperBtnCalculation(priceThirdTicketSenior, totalSumOfSeniorModal)
    return
  }
})
    
butM4.addEventListener('click', function() {
  if(parseInt(countInput4.value) > 1) {
    btnInputValues(countInput4, ticketsModalSenior, countInput2, units4, -addOne);

      if(selectTicket.value === 'firstT') {
        helperBtnCalculation(-priceFirstTicketSenior, totalSumOfSeniorModal);
        return
      } 

      if(selectTicket.value === 'secondT') {
        helperBtnCalculation(-priceSecondTicketSenior, totalSumOfSeniorModal);
        return
      }

      if(selectTicket.value === 'thirdT') {
        helperBtnCalculation(-priceThirdTicketSenior, totalSumOfSeniorModal);
        return
      }
  }
})

const inputDate = document.getElementById('dateInput');
const inputTime = document.getElementById('timeInput');
const dateSpan = document.querySelector('.dateSpan');
const timeSpan = document.querySelector('.timeSpan');

inputDate.addEventListener('change', changeDateAndTime)
inputTime.addEventListener('change', changeDateAndTime)

function changeDateAndTime () {
  dateSpan.innerHTML = inputDate.value
  timeSpan.innerHTML = inputTime.value
}
const selectTicket = document.querySelector('.inputItems__value__section')
const options = document.querySelectorAll('.optionTicket')
const valueTicketsSpan = document.querySelector('.valueSpan')

selectTicket.addEventListener('click', function (event) {
  let target = event.target

  if(target.value === "firstT") {
    testRadio(event.target.value)
    return
  } 

  if (target.value === "secondT") {
    testRadio(event.target.value)
    return
  } 

  if (target.value === "thirdT") {
    testRadio(event.target.value)
    return
  }
})

const email = document.getElementById('email')
const error = document.querySelector('.error')

email.addEventListener('blur', function() {
  if (!email.value.includes('@')) { 
    email.classList.add('invalid');
    error.innerHTML = 'Пожалуйста, введите правильный email.'
  }
})

email.addEventListener('focus',function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
})

const name = document.getElementById('name')
const errorForName = document.getElementById('errorForName')

name.addEventListener('blur', function() {
  if (name.value.includes('!','@','#','$','%','^','&','*','(',')','-','_','+','=','~')) { 
    name.classList.add('.invalidForName');
    errorForName.innerHTML = 'Имя введено не коректно.'
  }
})
name.addEventListener('focus', function() {
  if (this.classList.contains('.invalidForName')) {
    this.classList.remove('.invalidForName');
    errorForName.innerHTML = "";
  }
})

const scrolls = document.querySelectorAll('.scroll');
scrolls.forEach(element => element.addEventListener('click',handleClick))

const burger = document.querySelector('.burger');
burger.addEventListener('click', burgerChange)


