
import './index.scss'
import Swiper,{ Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import IMask from 'imask';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop:true,  
  });
  
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

let sum = 30;
 for(let i=0; i < radioBtns.length; i++){
    radioBtns[i].onchange = testRadio;
    
 }
 function testRadio () {
  sum = 0
  if((this.value === 'first') || (this.value === 'firstT')){
    sum = (+(countInput.value) * 20) + (+(countInput2.value) * 10)
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    selectTicket.value = options[0].value
    valueTicketsSpan.innerHTML = options[0].innerHTML

    valueTicketsSpan.innerHTML = options[0].innerHTML
    totalSumOfBasikModal.innerHTML =  20 * +(countInput.value)
    totalSumOfSeniorModal.innerHTML = 10 * +(countInput2.value)

    basicPriceFirst.innerHTML = '20'
    seniorPriceFirst.innerHTML = '10'

    basicPriceSecond.innerHTML = '20'
    seniorPriceSecond.innerHTML = '10'

    createStyleFlex.classList.remove('testGap')
  }
  else if((this.value === 'second') || (this.value === 'secondT')){
    sum = (+(countInput.value) * 25) + (+(countInput2.value) * 12.5)
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    selectTicket.value = options[1].value
    valueTicketsSpan.innerHTML = options[1].innerHTML

    valueTicketsSpan.innerHTML = options[1].innerHTML

    totalSumOfBasikModal.innerHTML = 25 * +(countInput.value)
    totalSumOfSeniorModal.innerHTML = 12.5 * +(countInput2.value)

    basicPriceFirst.innerHTML = '25'
    seniorPriceFirst.innerHTML = '12.5'

    basicPriceSecond.innerHTML = '25'
    seniorPriceSecond.innerHTML = '12.5'

    createStyleFlex.classList.add('testGap')
  }
  else if ((this.value === 'third') || (this.value === 'thirdT')){
    sum = (+(countInput.value) * 40) + (+(countInput2.value) * 20)
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    selectTicket.value = options[2].value
    valueTicketsSpan.innerHTML = options[2].innerHTML

    valueTicketsSpan.innerHTML = options[2].innerHTML

    totalSumOfBasikModal.innerHTML = 40 * +(countInput.value)
    totalSumOfSeniorModal.innerHTML = 20 * +(countInput2.value)

    basicPriceFirst.innerHTML = '40'
    seniorPriceFirst.innerHTML = '20'

    basicPriceSecond.innerHTML = '40'
    seniorPriceSecond.innerHTML = '20'

    createStyleFlex.classList.remove('testGap')

  }
 }

const wrapper = document.querySelector('wr');
let countInput = document.getElementById('count');
let butM = document.getElementById('bminus');
let butP = document.getElementById('bplus');
let units = countInput.value.replace(/\d/g, '');
butP.onclick = function(){
   
    countInput.value = parseInt(countInput.value)+1+units;
    ticketsModalBasik.innerHTML = countInput.value
    countInput3.value = countInput.value;
    if(radioBtns[0].checked === true){
    sum = sum + 20;
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) + 20;
    }
    else if(radioBtns[1].checked === true){
      sum = sum + 25;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
      totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) + 25;
    }
    else if(radioBtns[2].checked === true){
      sum = sum + 40;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
      totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) + 40;
    }
   
};

butM.onclick = function(){
    if(parseInt(countInput.value) > 1) {
        countInput.value = parseInt(countInput.value)-1+units;
        ticketsModalBasik.innerHTML = countInput.value
        countInput3.value = countInput.value;
        if(radioBtns[0].checked === true){
          sum = sum - 20;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
          totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) - 20;
          }
          else if(radioBtns[1].checked === true){
            sum = sum - 25;
            totalSum.innerHTML = `Total € ${sum}`
            totalModalSum.innerHTML = sum;
          totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) - 25;

          }
          else if(radioBtns[2].checked === true){
            sum = sum - 40;
            totalSum.innerHTML = `Total € ${sum}`
            totalModalSum.innerHTML = sum;
          totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) - 40;

          }
    }
};

let wrapper2 = document.querySelector('wr2');
let countInput2 = document.getElementById('count2');
let butM2 = document.getElementById('bminus2');
let butP2 = document.getElementById('bplus2');
let units2 = countInput2.value.replace(/\d/g, '');
butP2.onclick = function(){
    countInput2.value = parseInt(countInput2.value)+1+units2;
    ticketsModalSenior.innerHTML = countInput2.value
    countInput4.value = countInput2.value;
    if(radioBtns[0].checked === true){
      sum = sum + 10;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
      totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) + 10;

      }
      else if(radioBtns[1].checked === true){
        sum = sum + 12.5;
        totalSum.innerHTML = `Total € ${sum}`
        totalModalSum.innerHTML = sum;
      totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) + 12.5;

      }
      else if(radioBtns[2].checked === true){
        sum = sum + 20;
        totalSum.innerHTML = `Total € ${sum}`
        totalModalSum.innerHTML = sum;
        totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) + 20;

      }
};
butM2.onclick = function(){
    if(parseInt(countInput2.value) > 1) {
        countInput2.value = parseInt(countInput2.value)-1+units2;
        ticketsModalSenior.innerHTML = countInput2.value
        countInput4.value = countInput2.value;
        if(radioBtns[0].checked === true){
          sum = sum - 10;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
          totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) - 10;

          }
          else if(radioBtns[1].checked === true){
            sum = sum - 12.5;
            totalSum.innerHTML = `Total € ${sum}`
            totalModalSum.innerHTML = sum;
           totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) - 12.5;

          }
          else if(radioBtns[2].checked === true){
            sum = sum - 20;
            totalSum.innerHTML = `Total € ${sum}`
            totalModalSum.innerHTML = sum;
             totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) - 20;

          }
    }
};


const modal = document.querySelector('.modal')
const openBtn = document.getElementById('openBtn')

openBtn.addEventListener('click', openModal)

function openModal () {
  modal.classList.add('open')
  attachModalEvents()
}

function attachModalEvents() {
  modal.querySelector('.close').addEventListener('click',closeModal)
  document.addEventListener('keydown',handleEscape)

}

function handleEscape (e){
 if(e.key =='Escape') {
  closeModal();
 }
}
function closeModal() {
  modal.classList.remove('open')
  detachModalEvents();
}

function detachModalEvents(){
  modal.querySelector('.close').removeEventListener('click',closeModal)
  document.removeEventListener('keydown',handleEscape)

}

IMask(document.getElementById('phone'),{
  mask: '+{375}(00)00-00-000',
})


let wrapper3 = document.querySelector('wr3');
let countInput3 = document.getElementById('count3');
let butM3 = document.getElementById('bminus3');
let butP3 = document.getElementById('bplus3');
let units3 = countInput3.value.replace(/\d/g, '');

butP3.onclick = function(){
  countInput3.value = parseInt(countInput3.value)+1+units3;
  ticketsModalBasik.innerHTML = countInput3.value
  countInput.value = countInput3.value;
  if(selectTicket.value === 'firstT'){
    console.log('1')
    sum = sum + 20;
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) + 20;

    }
    else if(selectTicket.value === 'secondT'){
      console.log('2')
      sum = sum + 25;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
      totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) + 25;

    }
    else if(selectTicket.value === 'thirdT'){
      console.log('3')
      sum = sum + 40;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
     totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) + 40;

    }
};
butM3.onclick = function(){
  if(parseInt(countInput3.value) > 1) {
      countInput3.value = parseInt(countInput3.value)-1+units3;
      ticketsModalBasik.innerHTML = countInput3.value
      countInput.value = countInput3.value;
      if(selectTicket.value === 'firstT'){
        sum = sum - 20;
        totalSum.innerHTML = `Total € ${sum}`
        totalModalSum.innerHTML = sum;
        totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) - 20;

        }
        else if(selectTicket.value === 'secondT'){
          sum = sum - 25;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
        totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) - 25;

        }
        else if(selectTicket.value === 'thirdT'){
          sum = sum - 40;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
          totalSumOfBasikModal.innerHTML = +(totalSumOfBasikModal.innerHTML) - 40;

        }
  }
};

let wrapper4 = document.querySelector('wr4');
let countInput4 = document.getElementById('count4');
let butM4 = document.getElementById('bminus4');
let butP4 = document.getElementById('bplus4');
let units4 = countInput4.value.replace(/\d/g, '');

butP4.onclick = function(){
  countInput4.value = parseInt(countInput4.value)+1+units4;
  ticketsModalSenior.innerHTML = countInput4.value
  countInput2.value = countInput4.value;

  if(selectTicket.value === 'firstT'){
    sum = sum + 10;
    totalSum.innerHTML = `Total € ${sum}`
    totalModalSum.innerHTML = sum;
    totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) + 10;

    }
    else if(selectTicket.value === 'secondT'){
      sum = sum + 12.5;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
    totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) + 12.5;
      

    }
    else if(selectTicket.value === 'thirdT'){
      sum = sum + 20;
      totalSum.innerHTML = `Total € ${sum}`
      totalModalSum.innerHTML = sum;
    totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) + 20;

    }
};
butM4.onclick = function(){
  if(parseInt(countInput4.value) > 1) {
      countInput4.value = parseInt(countInput4.value)-1+units4;
      ticketsModalSenior.innerHTML = countInput4.value
      countInput2.value = countInput4.value;
      if(selectTicket.value === 'firstT'){
        sum = sum - 10;
        totalSum.innerHTML = `Total € ${sum}`
        totalModalSum.innerHTML = sum;
        totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) - 10;

        }
        else if(selectTicket.value === 'secondT'){
          sum = sum - 12.5;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
          totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) - 12.5;

        }
        else if(selectTicket.value === 'thirdT'){
          sum = sum - 20;
          totalSum.innerHTML = `Total € ${sum}`
          totalModalSum.innerHTML = sum;
        totalSumOfSeniorModal.innerHTML = +(totalSumOfSeniorModal.innerHTML) - 20;

        }
  }
};

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
// console.log(options[0])
let valueTicketsSpan = document.querySelector('.valueSpan')
    selectTicket.onchange = testRadio;


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
console.log('testTrigger')

let map = L.map('map').setView([53.891648, 25.303462], 20);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([53.891648, 25.303462]).addTo(map);
let marker2 = L.marker([53.891741, 25.303519]).addTo(map);
let marker3 = L.marker([53.891633967815714, 25.304059931370258]).addTo(map);
let marker4 = L.marker([53.89153746078612, 25.303522330963546]).addTo(map);
let marker5 = L.marker([53.89166321232616, 25.30312285250748]).addTo(map);


const moveto = new MoveTo();
const scrolls = document.querySelectorAll('.scroll');
scrolls.forEach(element => element.addEventListener('click',handleClick))

function handleClick(event) {
  event.preventDefault()  
  console.log(this.href)
  const target = this.getAttribute('href');
  moveto.move(document.querySelector(target))
}

const burger = document.querySelector('.burger');
burger.addEventListener('click', burgerChange)

  function burgerChange () {
    if(screen.width > 768){
  burger.classList.toggle('burgerX')
  document.querySelector('.Welcome__inf').classList.toggle('newNav')
  document.querySelector('.Menu-ForBurger').classList.toggle('Menu-ForBurger-Open')
    }
    else if(screen.width <= 768){
      console.log('hello')
      burger.classList.toggle('burgerX')
      document.querySelector('.Welcome__inf').classList.toggle('newNav')
      document.querySelector('.Menu-ForBurger').classList.toggle('Menu-ForBurger-Open')
      document.querySelector('.Welcome__img').classList.toggle('closeSlide')
      document.querySelector('.Welcome').classList.toggle('welcomeStart')
      document.querySelector('.blockMenu').classList.toggle('openBlockMenu')
    }
}



// if (screen.width < 768) {
//   console.log('2')
//   burger.addEventListener('click', burgerMedia)
//   function burgerMedia () {
//     document.querySelector('.modalForMedia').classList.toggle('modalForMediaOpen');
//   }
// }