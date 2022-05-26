'use strict'
/*function fib(a){
    if(a<=2){
        return 1;
    }else{
        return fib(a-1)+fib(a-2);
    }
}

for(var i=1; i<=process.argv[2]; i++){
    console.log(fib(i));
}*/

var a=new Array();
for(var i=0; i<process.argv[2]; i++){
    if(i>1){
        a.push(a[i-1]+a[i-2]);
    }else{
        a.push(1);
    }
    console.log(a[i]);
}