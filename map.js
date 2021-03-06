
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results);


// Using map()
const multiplyByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);


// Simplfied w/ map() + arrow function
const simplifiedArrow = nums.map(num => num * 2);
console.log(simplifiedArrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

const studentsWithTags = students.map(student => ({ name: student.name, id: student.id, }));
console.log(studentsWithTags);

let ages = {
  age: 30, 
  age: 25, 
  age: 42
};

const studentsWithAges = Object.assign({}, students.student, ages);
console.log(studentsWithAges);

const studentsWithAge = students.map(student => {
  const container = {};


  container.name = student.name;
  container.id = student.id;
  container.profession = student.profession;
  container.skill = student.skill;
  container.age = student.age;

  return container;
})

console.log(studentsWithAge);