// //1. create an object:
// const person={
//     name:"Rahul",
//     age:22,
//     city:"Delhi"
// };

// console.log("Name:-",person.name);
// console.log("Age:-",person.age);

// // 2.update the value
// person.age="25"
// console.log("Age:-",person.age);

// //3.  Add a new property

// //Add country = "India"
// person.country="India"
// console.log(person);

// // 4.  Access object values in two ways

// //use dot notation
// console.log("Name:- ", person.name);
// console.log("Age:- ", person.age);
// console.log("City:- ", person.city);

// // Use bracket notation
// console.log("Name:- ", person['name']);
// console.log("Age:- ", person['age']);
// console.log("City:- ", person['city']);


 // 5.  Loop through the object
 const user = {
    name: "Nitesh",
    age: 25,
   city: "Delhi"};

 for (let key in user) {
    console.log(key);
 }

//  Key + Value
for (let key in user) {
   console.log(key + ' : ' + user[key]);
 }


//6.  Delete a property

 //Remove city from the object
    delete user.city ;
    console.log(user);

// 7.  Nested object:

const student = {
   name: "A",
   marks: {
 math: 100,
     science: 95
  }
  };

//  Print math marks
 console.log(student.marks);

// Print science marks
 console.log(student.marks.science);

// 8.  Dynamic key access

 const key = "name";
 const userkey = {
  name: "A",
   age: 20
 };
 console.log(user[key]);

// 9.  Create a copy

 //Change age in new object (original should not change)
 const newuser={user};
 newuser.age=25;
 console.log(user.age);
 console.log(newuser.age);
