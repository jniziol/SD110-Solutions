const reportButton = document.getElementById('analytic-report');
const modal = document.getElementById('news-letter-modal');
const modalClose = document.querySelector('.modal-nav i');
const modalMain = document.querySelector('.modal-main');

function toggleModal(e) {
  document.body.classList.toggle('modal-open'); 
  modal.classList.toggle('closed');
}

reportButton.addEventListener('click', toggleModal);

modalClose.addEventListener('click', toggleModal);

// BONUS

// Make sure the clicked element is NOT in the main modal box
// this means it's the grey area.
modal.addEventListener('click', function(e) {
  if(!modalMain.contains(e.target)) {
    toggleModal();
  }
});

