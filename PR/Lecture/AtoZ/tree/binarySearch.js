function binarySearch(array, targetVal) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = array[mid];

    if (targetVal < midVal) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    if(midVal === targetVal) return mid
  }
  return -1;
}


console.log(binarySearch([2,4,5,6,7,8], 2));
console.log(binarySearch([2,4,5,6,7,8], 4));
console.log(binarySearch([2,4,5,6,7,8], 5));
console.log(binarySearch([2,4,5,6,7,8], 6));
console.log(binarySearch([2,4,5,6,7,8], 7));
console.log(binarySearch([2,4,5,6,7,8], 8));
console.log(binarySearch([2,4,5,6,7,8], 9));