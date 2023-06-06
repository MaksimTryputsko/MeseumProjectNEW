function handleClick(event) {
    event.preventDefault() 
    const target = this.getAttribute('href');
    moveto.move(document.querySelector(target))
}
const moveto = new MoveTo();  

const burger = document.querySelector('.burger');
function burgerChange () {
  if(screen.width > 768){
    burger.classList.toggle('burgerX')
    document.querySelector('.welcome__inf').classList.toggle('newNav')
    document.querySelector('.menuForBurger').classList.toggle('menuForBurgerOpen')
  } else {
    burger.classList.toggle('burgerX')
    document.querySelector('.welcome__inf').classList.toggle('newNav')
    document.querySelector('.menuForBurger').classList.toggle('menuForBurgerOpen')
    document.querySelector('.welcome__img').classList.toggle('closeSlide')
    document.querySelector('.welcome').classList.toggle('welcomeStart')
    document.querySelector('.blockMenu').classList.toggle('openBlockMenu')
  }
}
export { handleClick, burgerChange }