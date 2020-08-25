const addLargestNumbers = function(data) {
  // Put your solution here
  // console.log(data);
  let maxVal = 0;
  let secondMaxVal = 0;

  for(let i = 0; i < data.length; i++){
    if(data[i] > maxVal){
      secondMaxVal = maxVal;
      maxVal = data[i];
    }else if(data[i] > secondMaxVal && data[i] < maxVal){
      secondMaxVal = data[i];
    }
  }
  return maxVal + secondMaxVal;
};

console.log(addLargestNumbers([1, 10]));
console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(addLargestNumbers([-10, -4, -34, -6, -92, -2]));