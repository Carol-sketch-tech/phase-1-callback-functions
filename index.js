// call back fucntions is when functions are to be passed as arguments.
 function iReturnThings (thing){
    return thing;
 }
 console.log(iReturnThings({firstName:"brenda",lastName:"sugut"}))
//  the example above showa how to apss an object as on argument in a function.

// passign a function as a argument
 console.log(iReturnThings(function  (){return "I love cake."}));

//  callback function

function greet (name,cd){
    return cd(name);

}
console.log(greet('Vanessah Lennah',function(name){return'hello there,' + name;}))
//
 function doMath (num1, num2, cb){
    return cb(num1,num2);
 } 
 console.log(doMath(42,8,function(num1,num2){return num1*num2;}))