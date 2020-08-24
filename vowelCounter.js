// write a function that counts the number of vowels in a given string and returns that value

const vowelCounter = function(data) {
  // Put your solution here
  let vowelList = "aiueoAIUEO";
  let vowelCount = 0;

  for(let i = 0; i < data.length; i++){
    if(vowelList.indexOf(data[i]) !== -1){
      vowelCount += 1;
    }
  }
  return vowelCount;
};

console.log(vowelCounter("orange"));
console.log(vowelCounter("Cornerstone"));
console.log(vowelCounter("aeiou"));