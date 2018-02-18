/* 
JavaScript arrays are objects and have some useful properties and methods
*/
var a = [1, 3, 2, 5, 7];
 
a.length; // number of elements: 5
 
a.sort(); // sorts element in a: [1, 2, 3, 5, 7]
 
a.splice(2, 1); // remove 1 element starting from index=2 (3rd element)[3]
    			// the '3' has been removed from the array [1, 2, 5, 7]


// Elements can be of different types in a same array:

var a = [1,2,3];
a[2] = 'three';  // [1, 2, "three"]

// Removing elements from an array
a.splice(6, 1); // remove element at the sixth index
a.splice(0, 3); // remove the three first elements
a.splice(a.length-1); // remove the last element

a.push(6); // Adding a new element at the end
a.pop(); // remove element at last position


// Iterating over all elements in an array, using a for loop:

var persons = [
  {name:'Michel', age:51},
  {name:'Henri', age:20},
  {name:'Francois', age:29}
];

for(var i = 0; i < persons.length; i++) {
  var p = persons[i]; // current element
  
  document.body.innerHTML += p.name + "<br>"; 
}

// The most practical way to iterate on each element of a collection (array, string)
persons.forEach(function(p, index) {
  document.body.innerHTML += p.name + ", age " + p.age + 
                             ", at index " + index + " in the array<br>"; 
});


/* The forEach method takes a single argument that is a function/callback that can have one, two or three parameters:

        The first parameter is the current element of the array,
        The second parameter (optional) is the index of the current element in the array,
        The third element is the array itself

Typical use with only one parameter (the current element): */
var a = ['Monday', 'Tuesday', 'Wednesday'];

a.forEach(function(day) {  // day is the current element
  document.body.innerHTML += day + "<br>"; // will display Monday, Tuesday, Wednesday
});
