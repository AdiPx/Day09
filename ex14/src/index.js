// Only change code below this line
function myForLoop1(){ 
for (var evenNumbers = 0; evenNumbers < 10; evenNumbers +=2) {
    console.log(evenNumbers);
 }
}
function myForLoop2(){
for (var evenInverseNumbers = 10; evenInverseNumbers > 0; evenInverseNumbers -=2) {
    console.log(evenInverseNumbers);
 }
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line 
module.export = {
    myForLoop1,
    myForLoop2
};