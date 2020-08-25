// write a function that returns the longest name {first and last} in the given array of objects

const LongestName = function(instructors) {
  // Put your solution here

  let lgth = 0;
  let longest;
  let result = ""

  for(let i = 0; i < instructors.length; i++){
    result = `${instructors[i].first}${instructors[i].last}`;
    // console.log(result);
    
    if(result.length > lgth){
      lgth = result.length;
      longest = `first: ${instructors[i].first}, last: ${instructors[i].last}`;
    }
  }
  return longest;
};

console.log(LongestName([
  {first: "Samuel", last: "Sanderson"},
  {first: "Jeremiah", last: "Web"},
  {first: "Ophilia", last: "Rich"},
  {first: "Donald", last: "kant"}
]));
console.log(LongestName([
  {first: "Matthew", last: "Ebert"},
  {first: "David", last: "John"},
  {first: "Domascus", last: "Anderson"}
]));