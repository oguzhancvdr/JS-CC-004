// USING A SET
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  return [...new Set([...jointArray])];
}
let a = mergeArrays([22, 24, 26, 28], [21, 27]);
console.log(a.sort((a, b) => a - b));

// USING ARRAY.FROM() WITH SET

function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });
  return Array.from(new Set([...jointArray]));
}
let b = mergeArrays([22, 24, 26, 28], [21, 27]);
console.log(b.sort((a, b) => a - b));

// USING .FILTER()

function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  const uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );

  return uniqueArray;
}
let c = mergeArrays([22, 24, 26, 28], [21, 27]);
console.log(c.sort((a, b) => a - b));

// USING .REDUCE()

function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  const uniqueArray = jointArray.reduce((newArray, item) => {
    if (newArray.includes(item)) {
      return newArray;
    } else {
      return [...newArray, item];
    }
  }, []);

  return uniqueArray;
}
let d = mergeArrays([22, 24, 26, 28], [21, 27]);
console.log(d.sort((a, b) => a - b));
