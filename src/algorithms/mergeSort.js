/**
 * Sort Definition: This sort basically divides the array and sort small
 * pieces of it, merging the results.
 *
 */
let visualizationDelay = 1;
let speedValue = 200;
let originalArr = [];
let animationFn = null;

const mergeToVisualization = (initialIndex, updatedPieceArr) => {
  const originalArrTemp = [...originalArr];

  originalArrTemp.splice(initialIndex, updatedPieceArr.length, ...updatedPieceArr);

  originalArr = originalArrTemp;

  visualizationDelay += 1;

  setTimeout((updatedArrViz, startViz, endIndexViz) => {
    animationFn(startViz, endIndexViz, updatedArrViz);
  }, speedValue * visualizationDelay, [...originalArrTemp], initialIndex, initialIndex + updatedPieceArr.length);
};

const merge = (arr1 = [], arr2 = [], startIndex) => {
  const sorted = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  const mergedArr = [...sorted, ...arr1, ...arr2];

  mergeToVisualization(startIndex, mergedArr);

  return mergedArr;
};

const mergeSortHandler = (arr, startIndex = 0) => {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const middleIndexOriginalArrBased = middle + startIndex;

  return merge(
    mergeSortHandler(left, startIndex),
    mergeSortHandler(right, middleIndexOriginalArrBased),
    startIndex,
  );
};

const mergeSort = (arr, speed = 200, animationCb, sortedCb) => {
  speedValue = speed;
  originalArr = arr;
  animationFn = animationCb;

  mergeSortHandler(arr);

  setTimeout(() => {
    sortedCb();
  }, speedValue * visualizationDelay);
};

export default mergeSort;
