function binarySearch(array, targetVal) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (array[mid] !== targetVal || left < right) {
    mid = Math.floor((left + right) / 2);

    if (targetVal < array[mid]) {
      right = mid - 1;
    }
    
    if (targetVal > array[mid]) {
      left = mid + 1;
    }

    if(left > right && array[mid] !== targetVal) return -1;
    if(array[mid] === targetVal) return mid;
  }
  // return -1;
}


console.log(binarySearch([2,4,5,6,7,8], 2));
console.log(binarySearch([2,4,5,6,7,8], 4));
console.log(binarySearch([2,4,5,6,7,8], 5));
console.log(binarySearch([2,4,5,6,7,8], 6));
console.log(binarySearch([2,4,5,6,7,8], 7));
console.log(binarySearch([2,4,5,6,7,8], 8));
console.log(binarySearch([2,4,5,6,7,8], 9));