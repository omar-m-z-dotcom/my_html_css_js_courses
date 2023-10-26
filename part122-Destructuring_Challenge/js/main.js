/*
  Destructuring
  - Challenge
*/

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

for (chosen; chosen < 4; chosen++) {
  let { title: t, age: a, available: av, skills: [, s] } = myFriends[chosen - 1];
  console.log(`Friend ${chosen} is ${t} his age is ${a} and he is ${av ? "Available" : "Not Available"} and his last skill is ${s}`);
}