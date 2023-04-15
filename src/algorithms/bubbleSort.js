/**
 * Sort Definition:
 * Iterate through the list of items, comparing two elements and ordering it until there are no
 * elements changed in the last iteration.
 *
 */
const bubbleSort = (arr, speed = 200, animationCb, sortedCb) => {
  if (!arr || arr.length === 0) {
    return;
  }

  let round = 1;
  let visualizationDelay = 1;
  let sorted = false;
  const itemsArr = [...arr];
  const arrSize = itemsArr.length;

  while (!sorted) {
    const loopSize = (arrSize - round);

    sorted = true;
    round += 1;

    for (let i = 0; i < loopSize; i++) {
      const current = itemsArr[i];
      const nextItem = itemsArr[i + 1];

      visualizationDelay += 1;

      if (!nextItem && nextItem !== 0) {
        break;
      }

      if (current > nextItem) {
        const temp = current;

        itemsArr[i] = nextItem;
        itemsArr[i + 1] = temp;

        sorted = false;

        setTimeout((currentArr, iViz) => {
          animationCb(iViz, iViz + 1, currentArr);
        }, speed * visualizationDelay, [...itemsArr], i);

        continue;
      }

      setTimeout((currentArr, iViz) => {
        animationCb(iViz, iViz + 1, currentArr);
      }, speed * visualizationDelay, [...itemsArr], i);
    }
  }

  setTimeout(() => {
    sortedCb();
  }, speed * visualizationDelay);
};

export default bubbleSort;
