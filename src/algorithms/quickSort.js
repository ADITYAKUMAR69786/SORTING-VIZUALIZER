/* eslint-disable no-return-assign */
/**
 * Sort Definition: Quick Sort algorithm follows Divide and Conquer approach.
 * It divides elements into smaller parts based on some condition and performing
 * the sort operations on those divided smaller parts.
 *
 */
let visualizationDelay = 1;
let speedValue = 200;

const partitionHandler = (arr, right, left, animationCb) => {
  const pivot = arr[Math.floor((right + left) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) {
      left += 1;

      visualizationDelay += 1;

      setTimeout((currentArr, leftViz, rightViz, pivotViz) => {
        animationCb(leftViz, rightViz, currentArr, pivotViz);
      }, speedValue * visualizationDelay, [...arr], left, right, pivot);
    }

    while (arr[right] > pivot) {
      right -= 1;

      visualizationDelay += 1;

      setTimeout((currentArr, leftViz, rightViz, pivotViz) => {
        animationCb(leftViz, rightViz, currentArr, pivotViz);
      }, speedValue * visualizationDelay, [...arr], left, right, pivot);
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left += 1;
      right -= 1;

      visualizationDelay += 1;

      setTimeout((currentArr, leftViz, rightViz) => {
        animationCb(leftViz, rightViz, currentArr);
      }, speedValue * visualizationDelay, [...arr], left, right);
    }
  }

  return left;
};

const quickSortHandler = (arr, left, right, animationCb) => {
  const indexPartLeft = partitionHandler(arr, right, left, animationCb);

  if (left < indexPartLeft - 1) {
    quickSortHandler(arr, left, indexPartLeft - 1, animationCb);
  }

  if (indexPartLeft < right) {
    quickSortHandler(arr, indexPartLeft, right, animationCb);
  }

  return arr;
};

const quickSort = (arr, speed = 200, animationCb, sortedCb) => {
  if (!arr || arr.length === 0) {
    return;
  }

  speedValue = speed;

  const right = arr.length - 1;
  const left = 0;

  quickSortHandler(arr, left, right, animationCb);

  setTimeout(() => {
    sortedCb();
  }, speedValue * visualizationDelay);
};

export default quickSort;
