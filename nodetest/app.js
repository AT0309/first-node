'use strict'
function fib(a){
    if(a<=2){
        return 1;
    }else{
        return fib(a-1)+fib(a-2);
    }
}

for(var i=1; i<=process.argv[2]; i++){
    console.log(fib(i));
}