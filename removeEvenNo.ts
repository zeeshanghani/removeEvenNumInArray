// //Remove Even number in array
// let numbers:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13];
// for (let i = 0; i < numbers.length; i++)
//  {
//     if (numbers[i] % 1 === 0) {
//         numbers.splice(i,1)
//     }
//     console.log(numbers[i]);    
// }
let number:number[]=[1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < number.length; i++)
 { let element= number[i];
    if (element % 2 === 0) 
    {
        number.splice( i,1);
    }
 console.log(number[i]);
};


// let number:number[]=[1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < number.length; i++)
//  {
//     if (number % 2 === 0) 
//     {
//         number.splice( i,1);
//     }
//  console.log(number[i] );
    
// };




export{};