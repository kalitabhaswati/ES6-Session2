const nestedArray = [
	1,
	2,
	[4, { name: "Bhaswati", age: 24 }, [6, 7]],
	[8, [[10], 11]],
];

console.log("Nested Array ", nestedArray);

const flatten = (array) => {
	const flattenedArray = [];
	array.forEach((el) => {
		if (typeof el !== "object" || el === null || !(el instanceof Array)) {
			flattenedArray.push(el);
		} else {
			flattenedArray.push(...flatten(el));
		}
	});
	return flattenedArray;
};

console.log("Flattened Array ", flatten(nestedArray));