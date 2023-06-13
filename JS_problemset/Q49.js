// · Description: Write a function that sorts an array of objects based on a specified property.

const sortBy = (arr, prop) => arr.sort((a, b) => a[prop] - b[prop]);

obj_arr = [{
        name: 'john',
        age: 26,
    },
    {
        name: 'alice',
        age: 24,
    },
    {
        name: 'bob',
        age: 26,
    },
    {
        name: 'joker',
        age: 22,
    },
]

console.log(sortBy(obj_arr, 'age'));