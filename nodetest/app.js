'use strict'
const number=process.argv[2] || 1;
let sum=1;
for(let i=1; i<=number; i++){
    sum*=i;
}
console.log(sum);