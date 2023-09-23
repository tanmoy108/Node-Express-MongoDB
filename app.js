// let a = 30;
// let b = 10;

// setTimeout(() => {
//     b += 10;
//     console.log('b=', b); //20
// }, 3000)

// console.log('a=', a)
// console.log('a+b=', a + b); // 40 , not 30+20=50

// // output
// // 40
// // 20
// // এই সমস্যা টা দূর করার জন্য আমরা Promise use করতে পারি , 

//promise -----------------------------------
let a = 30;
let b = 10;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        b += 10
        resolve(b)
        console.log('b=', b);
    }, 3000)
})

myPromise.then((value) => {
    console.log('a=', a)
    console.log('a+b=', a + value);
})
