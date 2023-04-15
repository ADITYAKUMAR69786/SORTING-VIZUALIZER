class VisualController {
  constructor() {
    this.sortTypesEl = document.querySelector('[data-js="sort-types"]');

    this.sortSelected = 'bubble';

    this.initEvents();
  }

  initEvents() {
    this.sortTypesEventsInit();
  }

  sortTypesEventsInit() {
    Array.from(this.sortTypesEl.children).forEach((sortType) => {
      sortType.addEventListener('click', (event) => {
        const type = event.target.dataset.js;

        if (type !== this.sortSelected) {
          const previousSelected = Array.from(this.sortTypesEl.children)
            .find((item) => item.dataset.js === this.sortSelected);

          previousSelected.classList.remove('select');
          event.target.classList.add('select');

          this.sortSelected = type;
        }
      });
    });
  }
}

export default new VisualController();
