//  swapping 2 numbers

const swap = ({a,b}) => {
    a = a+b
    b = a-b
    a = a-b
    return {a,b}
}

console.log(swap({a:2,b:3}));

