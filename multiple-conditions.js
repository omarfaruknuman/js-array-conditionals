var isGraduated = true;
var salary = 25000;
var cars = 2;

// And operation

// if(isGraduated == true){
//     console.log('You are ready.');
// }
// else{
//     console.log('You are not ready');
// }

// if(isGraduated == true && salary >= 25000 && cars >= 1){
//     console.log('You are ready.');
// }
// else{
//     console.log('You are not ready');
// }

// Or operation
if(isGraduated == true || salary >= 25000 || cars >= 1){
    console.log('You are ready.');
}
else{
    console.log('You are not ready');
}

// Mixed conditions
if((isGraduated == true && salary >= 26000) || cars >= 1){
    console.log('You are ready.');
}
else{
    console.log('You are not ready');
}
