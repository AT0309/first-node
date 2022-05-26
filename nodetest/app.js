'use strict'
const number=process.argv[2] || 1;
var a=new Array();
var sum=0;
for(var i=0; i<number; i++){
    if(i>=2){
        sum=a[i-1]+a[i-2];
        a.push(sum);
    }else{
        a.push(1);
    }
}
console.log(a[a.length-1]);
