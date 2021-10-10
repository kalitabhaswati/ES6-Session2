//Array of numbers containing duplicate values as well.
let list = [1, 2, 4, 2, 5, 6, 7, 8, 9, 2, 4];
console.log(`Original list is --> ${list}`);
console.log(`Size of the array --> ${list.length}`);

//Implementing Set
let newSet = new Set();
for (let i = 0; i < list.length; i++) {
    newSet.add(list[i]);
}

console.log(newSet);
//Set Methods
console.log(`This set containes 2 --> ${newSet.has(2)}`);
console.log(`Size of this set is --> ${newSet.size}`);

//Implementing Map
let newMap = new Map();
for (let i = 0; i < list.length; i++) {
    newMap.set(i, list[i]);
}

console.log(newMap);
//Map Methods
console.log(`This map containes 2 --> ${newMap.has(2)}`); //Checks for key
console.log(`Size of this map is --> ${newMap.size}`);