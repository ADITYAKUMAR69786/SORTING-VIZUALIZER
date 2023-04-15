/**
 * Sort Definition: A heap is just a binary tree with some rules added to it.
 * We need to create a binary tree which each element will be bigger than its both child elements,
 * using array index to validate it as well.
 * 'heapify' function is comparing three elements (parent and two child) and validating
 * that the parent is bigger than the childs in fact.
 *
 */
let visualizationDelay = 1;
let speedValue = 200;

const heapify = (arr, length, i, animationCb) => {
  let largest = i;
  const left = i * 2 + 1;
  const right = left + 1;

  visualizationDelay += 1;

  if (left < length && right < length) {
    setTimeout((currentArr, leftViz, rightViz, largestViz) => {
      animationCb(leftViz, rightViz, currentArr, largestViz);
    }, speedValue * visualizationDelay, [...arr], left, right, largest);
  }

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify(arr, length, largest, animationCb);
  }

  return arr;
};

const heapSort = (arr, speed = 200, animationCb, sortedCb) => {
  if (!arr || arr.length === 0) {
    return;
  }

  speedValue = speed;

  const itemsArr = [...arr];
  const arrSize = itemsArr.length;

  let lastElementArr = arrSize - 1;
  let index = Math.floor(arrSize / 2 - 1);

  while (index >= 0) {
    heapify(itemsArr, arrSize, index, animationCb);
    index -= 1;
  }

  while (lastElementArr >= 0) {
    visualizationDelay += 1;

    setTimeout((currentArr, lastElement) => {
      animationCb(0, lastElement, currentArr);
    }, speedValue * visualizationDelay, [...itemsArr], lastElementArr);

    if (lastElementArr === 0) {
      setTimeout(() => {
        sortedCb();
      }, speedValue * (visualizationDelay + 10));
    }

    [itemsArr[0], itemsArr[lastElementArr]] = [itemsArr[lastElementArr], itemsArr[0]];
    heapify(itemsArr, lastElementArr, 0, animationCb);
    lastElementArr -= 1;
  }
};

export default heapSort;
