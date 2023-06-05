function handleClick(event) {
    event.preventDefault() 
    const target = this.getAttribute('href');
    moveto.move(document.querySelector(target))
}
const moveto = new MoveTo();  

function burgerChange () {
  if(screen.width > 768){
    burger.classList.toggle('burgerX')
    document.querySelector('.Welcome__inf').classList.toggle('newNav')
    document.querySelector('.Menu-ForBurger').classList.toggle('Menu-ForBurger-Open')
  } else {
    burger.classList.toggle('burgerX')
    document.querySelector('.Welcome__inf').classList.toggle('newNav')
    document.querySelector('.Menu-ForBurger').classList.toggle('Menu-ForBurger-Open')
    document.querySelector('.Welcome__img').classList.toggle('closeSlide')
    document.querySelector('.Welcome').classList.toggle('welcomeStart')
    document.querySelector('.blockMenu').classList.toggle('openBlockMenu')
  }
}
export { handleClick, burgerChange }