
const modal = document.querySelector('.modal')
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
export { openModal }


