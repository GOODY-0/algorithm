
class Sort {

    constructor(arr) {
        this.arr = arr;
    }

    partition (lPointer, rPointer){
        let pivot = rPointer;
        let pivotNum = this.arr[pivot];
        rPointer--;
    
        while (true) {
    
            while (this.arr[lPointer] < pivotNum) {
                lPointer++;
            }
            while (this.arr[rPointer] > pivotNum) {
                rPointer--;
            }
            
            if (lPointer >= rPointer) break;
            else this.swap(lPointer, rPointer);
        }
    
        this.swap(lPointer, pivot);
    
        return lPointer;
    }

    swap (lPointer, rPointer) {
        let tempValue = 0;
        tempValue = this.arr[lPointer];
        this.arr[lPointer] = this.arr[rPointer];
        this.arr[rPointer] = tempValue;
    }

    quickSort (lIndex, rIndex)  {
        if(rIndex - lIndex <= 0) return;
    
        const pivotPosition = this.partition(lIndex, rIndex);
        this.quickSort(lIndex, pivotPosition-1);
        this.quickSort(pivotPosition+1, rIndex);
        
    
        return this.arr;
    }
    
}



const arr1 = [0, 5, 2, 1, 6, 3];
const arr2 = [3, 6, 0, 2, 4, 1, 7, 5];

const sortableArr = new Sort(arr2);
const sortedArr = sortableArr.quickSort(0, arr2.length-1);
console.log(sortedArr);