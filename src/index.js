
import './index.scss'
import IMask from 'imask';
import { swiper } from './modules/swiper';
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

const createStyleFlex = document.querySelector('.inputItems__entryTicket__value2')
const blockRadioBtns = document.querySelector('.tickets__inf__calc__items')

let sum = 30;
function radioHelper(item,priceBasik, priceSenior ){
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
  if((arg === 'first') || (arg === 'firstT')){
    radioHelper(options[0],priceFirstTicketBasic,priceFirstTicketSenior)
    return
  } else if((arg === 'second') || (arg === 'secondT')){
    radioHelper(options[1],priceSecondTicketBasic,priceSecondTicketSenior)
    return
  } else if ((arg === 'third') || (arg === 'thirdT')){
    radioHelper(options[2],priceThirdTicketBasic,priceThirdTicketSenior)
    return
  }
}

let priceFirstTicketBasic = 20;
let priceFirstTicketSenior = 10;

let priceSecondTicketBasic = 25;
let priceSecondTicketSenior = 12.5;

let priceThirdTicketBasic = 40;
let priceThirdTicketSenior = 20;

blockRadioBtns.addEventListener('click',(event) =>{
  let target = event.target
  if(target === radioBtns[0]){ 
    testRadio(event.target.value)
  } else if(target === radioBtns[1]){
    testRadio(event.target.value)
  } else if (target === radioBtns[2]){
    testRadio(event.target.value)
  }
})

const wrapper = document.querySelector('wr');
let countInput = document.getElementById('count');
let butM = document.getElementById('bminus');
let butP = document.getElementById('bplus');
let units = countInput.value.replace(/\d/g, '');
butP.addEventListener('click', function(){
  btnInputPlus(countInput, ticketsModalBasik, countInput3, units);
  if(radioBtns[0].checked === true){
  helperBtnPlus(priceFirstTicketBasic,totalSumOfBasikModal)
  } else if(radioBtns[1].checked === true){
    helperBtnPlus(priceSecondTicketBasic,totalSumOfBasikModal)
  } else if(radioBtns[2].checked === true){
    helperBtnPlus(priceThirdTicketBasic,totalSumOfBasikModal)
  }
})
  
butM.addEventListener('click', function(){
  if(parseInt(countInput.value) > 1) {
      btnInputMinus(countInput, ticketsModalBasik, countInput3,units)
      if(radioBtns[0].checked === true){
        helperBtnMinus(priceFirstTicketBasic,totalSumOfBasikModal);
      } else if(radioBtns[1].checked === true){
        helperBtnMinus(priceSecondTicketBasic,totalSumOfBasikModal);
      } else if(radioBtns[2].checked === true){
        helperBtnMinus(priceThirdTicketBasic,totalSumOfBasikModal);
      }
  }
})
        
let wrapper2 = document.querySelector('wr2');
let countInput2 = document.getElementById('count2');
let butM2 = document.getElementById('bminus2');
let butP2 = document.getElementById('bplus2');
let units2 = countInput2.value.replace(/\d/g, '');

butP2.addEventListener('click', function(){
  btnInputPlus(countInput2, ticketsModalSenior, countInput4, units2);
  if(radioBtns[0].checked){
    helperBtnPlus(priceFirstTicketSenior,totalSumOfSeniorModal)
  } else if(radioBtns[1].checked){
    helperBtnPlus(priceSecondTicketSenior,totalSumOfSeniorModal)
  } else if(radioBtns[2].checked){
    helperBtnPlus(priceThirdTicketSenior,totalSumOfSeniorModal)
  }
})
   
butM2.addEventListener('click', function(){
  if(parseInt(countInput2.value) > 1) {
      btnInputMinus(countInput2, ticketsModalSenior, countInput4,units2)
      if(radioBtns[0].checked){
        helperBtnMinus(priceFirstTicketSenior,totalSumOfSeniorModal);
      } else if(radioBtns[1].checked){
          helperBtnMinus(priceSecondTicketSenior,totalSumOfSeniorModal);
      } else if(radioBtns[2].checked){
           helperBtnMinus(priceThirdTicketSenior,totalSumOfSeniorModal);
      }
  }
})

const openBtn = document.getElementById('openBtn')
openBtn.addEventListener('click', openModal)

IMask(document.getElementById('phone'),{
  mask: '+{375}(00)00-00-000',
})

let wrapper3 = document.querySelector('wr3');
let countInput3 = document.getElementById('count3');
let butM3 = document.getElementById('bminus3');
let butP3 = document.getElementById('bplus3');
let units3 = countInput3.value.replace(/\d/g, '');

butP3.addEventListener('click', function(){
  btnInputPlus(countInput3, ticketsModalBasik, countInput, units3);
  if(selectTicket.value === 'firstT'){
    helperBtnPlus(priceFirstTicketBasic,totalSumOfBasikModal)
  } else if(selectTicket.value === 'secondT'){
    helperBtnPlus(priceSecondTicketBasic,totalSumOfBasikModal)
  } else if(selectTicket.value === 'thirdT'){
    helperBtnPlus(priceThirdTicketBasic,totalSumOfBasikModal)
  }
})

butM3.addEventListener('click', function(){
  if(parseInt(countInput3.value) > 1) {
      btnInputMinus(countInput3, ticketsModalBasik, countInput,units3)
      if(selectTicket.value === 'firstT'){
        helperBtnMinus(priceFirstTicketBasic,totalSumOfBasikModal);
      } else if(selectTicket.value === 'secondT'){
        helperBtnMinus(priceSecondTicketBasic,totalSumOfBasikModal);
      } else if(selectTicket.value === 'thirdT'){
        helperBtnMinus(priceThirdTicketBasic,totalSumOfBasikModal);
      }
  }
})   
        
let wrapper4 = document.querySelector('wr4');
let countInput4 = document.getElementById('count4');
let butM4 = document.getElementById('bminus4');
let butP4 = document.getElementById('bplus4');
let units4 = countInput4.value.replace(/\d/g, '');

butP4.addEventListener('click', function(){
  btnInputPlus(countInput4, ticketsModalSenior, countInput2, units4);
    if(selectTicket.value === 'firstT'){
    helperBtnPlus(priceFirstTicketSenior,totalSumOfSeniorModal)
  } else if(selectTicket.value === 'secondT'){
    helperBtnPlus(priceSecondTicketSenior,totalSumOfSeniorModal)
  } else if(selectTicket.value === 'thirdT'){
    helperBtnPlus(priceThirdTicketSenior,totalSumOfSeniorModal)
  }
})
    
butM4.addEventListener('click', function(){
  if(parseInt(countInput4.value) > 1) {
      btnInputMinus(countInput4, ticketsModalSenior, countInput2,units4);
      if(selectTicket.value === 'firstT'){
        helperBtnMinus(priceFirstTicketSenior,totalSumOfSeniorModal);
      } else if(selectTicket.value === 'secondT'){
        helperBtnMinus(priceSecondTicketSenior,totalSumOfSeniorModal);
      } else if(selectTicket.value === 'thirdT'){
        helperBtnMinus(priceThirdTicketSenior,totalSumOfSeniorModal);
      }
  }
})
function btnInputPlus (input,typeOfTicket,inputFinish,unitsTest){
  input.value = parseInt(input.value)+1+unitsTest;
  typeOfTicket.innerHTML = input.value
  inputFinish.value = input.value;
}
function btnInputMinus (input,typeOfTicket,inputFinish,unitsTest){
  input.value = parseInt(input.value)-1+unitsTest;
  typeOfTicket.innerHTML = input.value
  inputFinish.value = input.value;
}
function helperBtnPlus (price, finishSum) {
  sum = sum + price;
  totalSum.innerHTML = `Total € ${sum}`
  totalModalSum.innerHTML = sum;
  finishSum.innerHTML = +(finishSum.innerHTML) + price;
}
function helperBtnMinus (price, finishSum) {
        sum = sum - price;
        totalSum.innerHTML = `Total € ${sum}`
        totalModalSum.innerHTML = sum;
        finishSum.innerHTML = +(finishSum.innerHTML) - price;
}

const inputDate = document.getElementById('dateInput');
const inputTime = document.getElementById('timeInput');
const dateSpan = document.querySelector('.dateSpan');
const timeSpan = document.querySelector('.timeSpan');

inputDate.onchange = changeDateAndTime;
inputTime.onchange = changeDateAndTime;
function changeDateAndTime () {
  dateSpan.innerHTML = inputDate.value
  timeSpan.innerHTML = inputTime.value
}
const selectTicket = document.querySelector('.inputItems__value__section')
const options = document.querySelectorAll('.optionTicket')
const valueTicketsSpan = document.querySelector('.valueSpan')

selectTicket.addEventListener('click', function (event){
  let target = event.target
  if(target.value === "firstT"){
    testRadio(event.target.value)
  } else if (target.value === "secondT"){
    testRadio(event.target.value)
  } else if (target.value === "thirdT"){
    testRadio(event.target.value)
  }
})

const email = document.getElementById('email')
const error = document.querySelector('.error')

email.onblur = function() {
  if (!email.value.includes('@')) { 
    email.classList.add('invalid');
    error.innerHTML = 'Пожалуйста, введите правильный email.'
  }
};

email.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};

const name = document.getElementById('name')
const errorForName = document.getElementById('errorForName')

name.onblur = function() {
  if (name.value.includes('!','@','#','$','%','^','&','*','(',')','-','_','+','=','~')) { 
    name.classList.add('.invalidForName');
    errorForName.innerHTML = 'Имя введено не коректно.'
  }
};

name.onfocus = function() {
  if (this.classList.contains('.invalidForName')) {
    this.classList.remove('.invalidForName');
    errorForName.innerHTML = "";
  }
};

const scrolls = document.querySelectorAll('.scroll');
scrolls.forEach(element => element.addEventListener('click',handleClick))

const burger = document.querySelector('.burger');
burger.addEventListener('click', burgerChange)