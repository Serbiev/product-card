export class Modal {
  constructor(modalId) {
    this.modal = document.querySelector(`#${modalId}`);
    this.overlay = document.querySelector('.overlay');
    this.button = document.querySelector('#button-close-modal');

    this.handleCloseButton();
  }

  openModal() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  closeModal() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
  }

  isModalOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  handleCloseButton() {
    this.button.addEventListener('click', () => {
      this.closeModal();
    });
  }
}