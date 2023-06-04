
import './index.scss'
import IMask from 'imask';
import { swiper } from './modules/swiper';
import { openModal } from './modules/openModal';
import { map } from './modules/map'
import { handleClick,burgerChange } from './modules/scroll';

let totalSum = document.querySelector('.tickets__inf__calc__amount__total')
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
  }
  else if((arg === 'second') || (arg === 'secondT')){
    radioHelper(options[1],priceSecondTicketBasic,priceSecondTicketSenior)
  }
  else if ((arg === 'third') || (arg === 'thirdT')){
    radioHelper(options[2],priceThirdTicketBasic,priceThirdTicketSenior)
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
   
  countInput.value = parseInt(countInput.value)+1+units;
  ticketsModalBasik.innerHTML = countInput.value
  countInput3.value = countInput.value;
  if(radioBtns[0].checked === true){
  sum = sum + priceFirstTicketBasic;
  totalSum.innerHTML = `Total € ${sum}`
  totalModalSum.innerHTML = sum;
  totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) + priceFirstTicketBasic;
  }
  else if(radioBtns[1].checked === true){
    sum = sum + priceSecondTicketBasic;
    totalSum.innerHTML = `Total € ${sum}`
    console.log(sum)
    totalModalSum.innerHTML = sum;
    totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) + priceSecondTicketBasic;
  }
  else if(radioBtns[2].checked === true){
    sum = sum + priceThirdTicketBasic;
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) + priceThirdTicketBasic;
  }
 
})

butM.addEventListener('click', function(){
  if(parseInt(countInput.value) > 1) {
      countInput.value = parseInt(countInput.value)-1+units;
      ticketsModalBasik.innerHTML = countInput.value
      countInput3.value = countInput.value;
      if(radioBtns[0].checked === true){
        sum = sum - priceFirstTicketBasic;
        totalSum.innerHTML = `Total € ${sum}`
        totalModalSum.innerHTML = sum;
        totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) - priceFirstTicketBasic;
        }
        else if(radioBtns[1].checked === true){
          sum = sum - priceSecondTicketBasic;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
        totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) - priceSecondTicketBasic;

        }
        else if(radioBtns[2].checked === true){
          sum = sum - priceThirdTicketBasic;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
        totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) - priceThirdTicketBasic;

        }
  }
})


let wrapper2 = document.querySelector('wr2');
let countInput2 = document.getElementById('count2');
let butM2 = document.getElementById('bminus2');
let butP2 = document.getElementById('bplus2');
let units2 = countInput2.value.replace(/\d/g, '');

butP2.addEventListener('click', function(){
  countInput2.value = parseInt(countInput2.value)+1+units2;
  ticketsModalSenior.innerHTML = countInput2.value
  countInput4.value = countInput2.value;
  if(radioBtns[0].checked === true){
    sum = sum + priceFirstTicketSenior;
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) + priceFirstTicketSenior;

    }
    else if(radioBtns[1].checked === true){
      sum = sum + priceSecondTicketSenior;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
    totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) + priceSecondTicketSenior;

    }
    else if(radioBtns[2].checked === true){
      sum = sum + priceThirdTicketSenior;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
      totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) + priceThirdTicketSenior;

    }
})
butM2.addEventListener('click', function(){
  if(parseInt(countInput2.value) > 1) {
      countInput2.value = parseInt(countInput2.value)-1+units2;
      ticketsModalSenior.innerHTML = countInput2.value
      countInput4.value = countInput2.value;
      if(radioBtns[0].checked === true){
        sum = sum - priceFirstTicketSenior;
        totalSum.innerHTML = `Total € ${sum}`
        totalModalSum.innerHTML = sum;
        totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) - priceFirstTicketSenior;

        }
        else if(radioBtns[1].checked === true){
          sum = sum - priceSecondTicketSenior;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
         totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) - priceSecondTicketSenior;

        }
        else if(radioBtns[2].checked === true){
          sum = sum - priceThirdTicketSenior;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
           totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) - priceThirdTicketSenior;

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
  countInput3.value = parseInt(countInput3.value)+1+units3;
  ticketsModalBasik.innerHTML = countInput3.value
  countInput.value = countInput3.value;
  if(selectTicket.value === 'firstT'){
    sum = sum + priceFirstTicketBasic;
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) + priceFirstTicketBasic;

    }
    else if(selectTicket.value === 'secondT'){
      sum = sum + priceSecondTicketBasic;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
      totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) + priceSecondTicketBasic;

    }
    else if(selectTicket.value === 'thirdT'){
      sum = sum + priceThirdTicketBasic;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
     totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) + priceThirdTicketBasic;
    }
})

butM3.addEventListener('click', function(){
  if(parseInt(countInput3.value) > 1) {
      countInput3.value = parseInt(countInput3.value)-1+units3;
      ticketsModalBasik.innerHTML = countInput3.value
      countInput.value = countInput3.value;
      if(selectTicket.value === 'firstT'){
        sum = sum - priceFirstTicketBasic;
        totalSum.innerHTML = `Total € ${sum}`
        totalModalSum.innerHTML = sum;
        totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) - priceFirstTicketBasic;

        }
        else if(selectTicket.value === 'secondT'){
          sum = sum - priceSecondTicketBasic;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
        totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) - priceSecondTicketBasic;

        }
        else if(selectTicket.value === 'thirdT'){
          sum = sum - priceThirdTicketBasic;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
          totalSumOfBasikModal.innerHTML = parseInt(totalSumOfBasikModal.innerHTML) - priceThirdTicketBasic;

        }
  }
})
let wrapper4 = document.querySelector('wr4');
let countInput4 = document.getElementById('count4');
let butM4 = document.getElementById('bminus4');
let butP4 = document.getElementById('bplus4');
let units4 = countInput4.value.replace(/\d/g, '');

butP4.addEventListener('click', function(){
  countInput4.value = parseInt(countInput4.value)+1+units4;
  ticketsModalSenior.innerHTML = countInput4.value
  countInput2.value = countInput4.value;

  if(selectTicket.value === 'firstT'){
    sum = sum + priceFirstTicketSenior;
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) + priceFirstTicketSenior;

    }
    else if(selectTicket.value === 'secondT'){
      sum = sum + priceSecondTicketSenior;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
    totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) + priceSecondTicketSenior;
      

    }
    else if(selectTicket.value === 'thirdT'){
      sum = sum + priceThirdTicketSenior;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
    totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) + priceThirdTicketSenior;

    }
})

butM4.addEventListener('click', function(){
  if(parseInt(countInput4.value) > 1) {
      countInput4.value = parseInt(countInput4.value)-1+units4;
      ticketsModalSenior.innerHTML = countInput4.value
      countInput2.value = countInput4.value;
      if(selectTicket.value === 'firstT'){
        sum = sum - priceFirstTicketSenior;
        totalSum.innerHTML = `Total € ${sum}`
        totalModalSum.innerHTML = sum;
        totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) - priceFirstTicketSenior;

        }
        else if(selectTicket.value === 'secondT'){
          sum = sum - priceSecondTicketSenior;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
          totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) - priceSecondTicketSenior;

        }
        else if(selectTicket.value === 'thirdT'){
          sum = sum - priceThirdTicketSenior;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
        totalSumOfSeniorModal.innerHTML = parseInt(totalSumOfSeniorModal.innerHTML) - priceThirdTicketSenior;

        }
  }
})

const inputDate = document.getElementById('dateInput');
const inputTime = document.getElementById('timeInput');
let dateSpan = document.querySelector('.dateSpan');
let timeSpan = document.querySelector('.timeSpan');

inputDate.onchange = changeDateAndTime;
inputTime.onchange = changeDateAndTime;
function changeDateAndTime () {
  dateSpan.innerHTML = inputDate.value
  timeSpan.innerHTML = inputTime.value
}
const selectTicket = document.querySelector('.inputItems__value__section')

let options = document.querySelectorAll('.optionTicket')

let valueTicketsSpan = document.querySelector('.valueSpan')

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
    name.classList.add('invalidForName');
    errorForName.innerHTML = 'Имя введено не коректно.'
  }
};

name.onfocus = function() {
  if (this.classList.contains('invalidForName')) {
    this.classList.remove('invalidForName');
    errorForName.innerHTML = "";
  }
};



const scrolls = document.querySelectorAll('.scroll');
scrolls.forEach(element => element.addEventListener('click',handleClick))


const burger = document.querySelector('.burger');
burger.addEventListener('click', burgerChange)

