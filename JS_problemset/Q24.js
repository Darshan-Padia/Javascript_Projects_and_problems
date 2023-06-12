//  generating a random number in a given range

const genRandomNum = (a,b) => {
    let range =Math.abs( b - a )
    let x = Math.random()
    console.log(x);
    let intial_range = 1
    let scaling_factor = range / intial_range
    console.log(x * scaling_factor);
    return Math.floor(x * scaling_factor) + a

}


console.log(genRandomNum(500,550))