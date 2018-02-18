var colorsArray = ['red', 'blue', 'yellow', 'purple'];

// each element has an index, starting at 0  

var people = [
	{ name: 'Michel', age:51 },
    { name: 'Pig',    age:20 },
    { name: 'Pirate', age:32 }
];

function compareByAge(person1, person2) { // comparison function
  if (person1.age < person2.age)         // compare by age
    return -1;
  if (person1.age > person2.age)
    return 1;
  return 0;
}

persons.sort(compareByAge); // this will call automatically compareByAge
                            // passing all persons from the array, compare
                            // them by age and sort the array.


// Array of arrays

var a = [[1,2,3], [4,5,6]]; // a is a matrix: 2 rows, 3 columns.

a[0]; // first row [1, 2, 3]
 
a[1]; // second row [4, 5, 6]
 
a[0][0]; // top left element 1
 
a[0][1]; // second element, first line 2
 
a[0][2]; // third element, first line 3
 
a[1][0]; // first element, second line 4
 
a[1][1]; // second element, second line 5