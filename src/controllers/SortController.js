import bubbleSort from '../algorithms/bubbleSort';
import heapSort from '../algorithms/heapSort';
import quickSort from '../algorithms/quickSort';
import mergeSort from '../algorithms/mergeSort';

class SortController {
  constructor() {
    this.itemsContainerEl = document.querySelector('[data-js="list-container"]');
    this.arraySizeEl = document.querySelector('[data-js="sort-options-size"]');
    this.sortSpeedEl = document.querySelector('[data-js="sort-options-speed"]');
    this.sortTypesEl = document.querySelector('[data-js="sort-types"]');
    this.btnSortEl = document.querySelector('[data-js="btn-sort"]');
    this.btnNewArrayEl = document.querySelector('[data-js="btn-new-array"]');

    this.arraySize = 50;
    this.speed = 100;

    this.sizesArr = [];
    this.selectedItems = [];

    this.initEvents();
  }

  initEvents() {
    this.arraySizeEl.addEventListener('input', (event) => {
      this.arraySize = event.target.value;

      this.initItemsList();
    });

    this.sortSpeedEl.addEventListener('input', (event) => {
      this.speed = event.target.value;
    });

    this.btnSortEl.addEventListener('click', () => {
      this.handleSortVisualization();
    });

    this.btnNewArrayEl.addEventListener('click', () => {
      this.initItemsList();
    });

    this.initItemsList();
  }

  initItemsList() {
    this.itemsContainerEl.innerHTML = '';
    this.sizesArr = [];

    for (let i = 1; i <= this.arraySize; i++) {
      const divEl = document.createElement('div');
      const height = parseInt(Math.random() * 100, 10) || 1;

      divEl.style.height = `${height}%`;

      this.sizesArr.push(height);

      this.itemsContainerEl.appendChild(divEl);
    }
  }

  handleSortVisualization() {
    document.querySelector('[data-js="header"]').classList.add('disabled');

    const sortSelected = Array.from(this.sortTypesEl.children).find((item) => item.classList.contains('select'));

    switch (sortSelected.dataset.js) {
      case 'bubble':
        bubbleSort(this.sizesArr, this.speed, this.update, this.finished);
        break;
      case 'heap':
        heapSort(this.sizesArr, this.speed, this.update, this.finished);
        break;
      case 'merge':
        mergeSort(this.sizesArr, this.speed, this.update, this.finished);
        break;
      case 'quick':
        quickSort(this.sizesArr, this.speed, this.update, this.finished);
        break;
      default:
        bubbleSort(this.sizesArr, this.speed, this.update, this.finished);
    }
  }

  update(currentIndex, comparedIndex, currentArr = this.sizesArr, parentIndex) {
    const itemsEl = document.querySelector('[data-js="list-container"]');

    itemsEl.innerHTML = '';

    for (let i = 1; i <= currentArr.length; i++) {
      const divEl = document.createElement('div');

      divEl.style.height = `${currentArr[i]}%`;

      if (currentIndex === i) {
        divEl.style.background = 'var(--color-green-primary)';
      }

      if (comparedIndex === i) {
        divEl.style.background = 'var(--color-grey-secondary)';
      }

      if (parentIndex === i) {
        divEl.style.background = 'var(--color-green-secondary)';
      }

      itemsEl.appendChild(divEl);
    }
  }

  finished() {
    const itemsEl = document.querySelector('[data-js="list-container"]');
    document.querySelector('[data-js="header"]').classList.remove('disabled');

    Array.from(itemsEl.children).forEach((item) => {
      item.style.background = 'var(--color-green-primary)';
    });
  }
}

export default new SortController();
