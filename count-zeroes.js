function countZeroes(arr) {
  let firstZero = findFirst(arr)
  if(firstZero === -1) return 0;

  return arr.length - firstZero
}

function findFirst(arr, start = 0, end = arr.length -1) {
    if(end >= start){
        let middle = start + Math.floor((end - start) / 2)
        if((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0){
            return middle;
        }
        else if (arr[middle] === 1){
            return findFirst(arr, middle + 1, end)
        }
        return findFirst(arr, start, middle - 1)
    }
    return -1;
}

module.exports = countZeroes