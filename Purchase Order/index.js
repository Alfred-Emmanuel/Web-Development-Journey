function func(){ 
  let shirt = document.getElementById('shirt').value 
  let SP = shirt * 3500; // how do i do it that i don't have to hardcode this price (3500)? for Mr Ope
  let yeezy = document.getElementById('yeezy').value 
  let YP = yeezy * 8000
  let watch = document.getElementById('watch').value 
  let WP = watch * 10000;
  let jordan = document.getElementById('jordan').value 
  let JP = jordan * 15000
  let sunglasses = document.getElementById('sunglasses').value 
  let SUP = sunglasses * 3000;

  let total = SP + YP + WP + JP + SUP;
  document.getElementById('span2').innerHTML = "#" +total

  document.getElementById('shirtQuantity').innerHTML = shirt;
  document.getElementById('yeezyQuantity').innerHTML = yeezy;
  document.getElementById('watchQuantity').innerHTML = watch;
  document.getElementById('jordanQuantity').innerHTML = jordan;
  document.getElementById('glassesQuantity').innerHTML = sunglasses

  document.getElementById('shirtPrice').innerHTML = SP;
  document.getElementById('yeezyPrice').innerHTML = YP;
  document.getElementById('watchPrice').innerHTML = WP;
  document.getElementById('jordanPrice').innerHTML = JP;
  document.getElementById('glassesPrice').innerHTML = SUP;

  document.getElementById('totalPrice').innerHTML = "#" +total;

  document.getElementById('span3').innerHTML = "#" +total;
}



  // enables typing in the select box
$(".js-example-tags").select2({
  tags: true
}); 

 // for the popup coming out nd going back in
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}