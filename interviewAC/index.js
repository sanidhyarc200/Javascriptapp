const data = [
    { name: "John", age: 30, dob: "1990-01-01" },
    { name: "Jane", age: 25, dob: "1995-05-15" },
    
];
// change to data = [
//   { name: 'John', age: 30, dob: '01/01/1990' },
//   { name: 'Jane', age: 25, dob: '15/05/1995' }
// ]

let newdata = data.map(((obj) => {
    return obj.age*2;
}))
console.log(newdata);