// node main 
//  js hosting, for while do 
// let  a= 1;
// for(i=2; i<100; i=i+2){
//     console.log (i)
//     if(i==14);
//     continue
// }

// let  a= 1;

// while(a<=22){
//     a++;
//     console.log(a);
// }
// console.log(" while conditional ")

// let i=0;
// while(i<5){
//  i++
//     console.log("your numbers " + i);
// }
//  console.log("for conditional")    
// // let i = 0;
// for(let i=0;i<5; i++){

//     console.log("your numbers " + i);
// }
    // let i = 0;
    // while (i < 10) {
    //   text += "<br>The number is " + i;
    //   i++;
    // }
// graet point
// let pm =18;

// switch(true){
//     case(pm >0 && pm <33):
//     console.log ('You are fill');
//     break;
//     case(pm >=33 && pm <=39):
//     break;
//     console.log ('You graed point D');
//     case(pm >=40 && pm <=49):
//     break;
//     console.log ('You graed point C');
//     break;
//     case(pm >=50 && pm <=59):
//     console.log ('You graed point B');
//     break;
//     case(pm >=60 && pm <=69):
//     console.log ('You graed point A-');
//     break;
//     case(pm >=70 && pm <=79):
//     console.log ('You graed point A');
//     break;
//     default:console.log('your graed point A+');
// }



// number 
// let passmark=44;
// if (passmark>=80){
//     console.log('You gat A+');
     
// }else if (passmark>=40) {
//  console.log('You are pass');
// }else{
//     console.log('you are fill');
// }


// type of 
// let a =20 ,b='10';
// if (a===b){
//     console.table('a is strin')
// }
// else{
//     console.table('a number 174554')
// }

// let a= "sh";

// if(typeof a == 'string'){
//     console.log(typeof a)
// }else{
//     console.log(typeof a)
// }

// if else 
// let a =20 ;
// if(a<16){
//     console.log('my name shovon');
// }
// if(a>16){
//     console.log('my name sara');
// }


// function chackOddEven(x){
//     if(x%2==0){
//         console.log('It is a even number')
//     }
//     else{
//         console.log(' It is odd number')
//     }
// }
// chackOddEven(110)
// function chackOddEven(x , y){
//    console.log ( x*y);
// }
// chackOddEven(2 , 10)
// function vagfaul( x, y ){
//     for(x; x<y; x++){
//     console.log(x/3);

//     }

// }
// vagfaul(6, 27)
// odd even and lege and small
// function vagfaul(x,y,z){
//    if(x>y && x>z){
//     console.log('X is bigest');
//     if(x%2==0){
//         console.log ('This is even number')
//     }
//     else{
//         console.log('this is odd numbr')
//     }
//    }
//    else if (y>x && y>z){
//     console.log('Y is biggerst')
//     if(y%2==0){
//         console.log ('This is even number')
//     }
//     else{
//         console.log('this is odd numbr')
//     }
//    }
//    else (z>x && z>y) 
//    console.log("Z is biggerst");
//    if(z%2==0){
//     console.log ('This is even number')
//     }
//     else{
//         console.log('this is odd numbr')
//     }
// }
// vagfaul(6,30,19);

// tarnaey oprtu

// function tarnaey(x){
//     (x%2==0)?console.log('even'):console.log('even')
// }

// tarnaey(3)
// function tarnaey(x){
//     (x%2==0)?console.log('even'):console.log('even')
// }

// tarnaey(3)
// three parson age chack
// let a=40; b=35; c=450;
// a>b && a>c?console.log('parson age' +a +'is grater'):
//     (
//     b>c?
//     console.log('parson age' +b +'is grater'):
//     // console.log(`c is vig  ${a}`) //varianble call
//     console.log(`parson age ${c} is grater`)
//     )

// nota 

// function namota(y){
//     for(x=1;x<11;x++){
//         console.log(x + '*' +y + '=' + x*y ) 
//     }
    
// }
// namota(6)
// setTimeout (namota,1000)
// function namota(y){
//     for(x=1;x<11;x++){
//         console.log(x + '*' +y + '=' + x*y ) 
//     }
    
// }
// namota(6)
// function bil(x,y){
//     console.log("Your Prestnt Unit " +x );
//     console.log("Your Privious Unit " +y );
//     let z = x-y;
//     console.log(z)
// /* here used unit is down to 50 par unit cost 5 tk .form 51 to 100 par uint cost 8 tk form 101 to 200 par unit cost 12 tk 201 to 250 par unit 15 tk upto 251 tk is18  */
//     if(z<=50){
//         console.log(z*2)
        
//     }
//     else if(z<=51 || z<=100){
//         console.log(z*8)
        
//     }
//     else if (z<=101 || z<=250){
//         console.log(z*12)
//     }
//     else
//         console.log(z*18  )
    

// }
// bil(210,50);

// class Person {
//     constructor(nm,age) {
//       this.nm = nm;
//       this.age = age;
  
//     }
  
//     introduce() {
//       console.log(`Hello,  my age is ${this.nm} my age is ${this.age}`);
//     }
//   }
  
//   const show = new Person
//   show.nm = 'shovon'; 
//   show.age= '12'; 
  
//   show.introduce(); // Hello, my name is Otto
  

// class milk {
//   constructor(Qn,am){
//     this.Qn =Qn;
//     this.am = am
//   }
//   gun(){
//     console.log (this.Qn*this.am)
//   }
 
// }
// const sum = new milk(2,5)
// sum.gun();
// class milk {
//   constructor(Qn,am){
//     this.Qn =Qn;
//     this.am = am
//   }
//   gun(){
//     console.log (this.Qn*this.am)
//   }
 
// }
// const sum = new milk(2,5)
// sum.gun();
// node main 
// 
// ২ গাড়ি 
// ১ম   গাড়িতে টায়ার ৫, গ্লাস ৩, স্টিয়ারিং  ১ লাগে 
// ২য় গাড়িতে  টায়ার ৪, গ্লাস ৪, স্টিয়ারিং  ১ লাগে 
// সবাইকে  টায়ার ৫০, গ্লাস ৩০, স্টিয়ারিং  ১০ দেয়া হলে 
// ১ম কয়টি গাড়ি হবে এবং ২য় গাড়ি হবে?
// জাভাস্ক্রিপ ক্লাস ব্যবহার করো 

// class Car {
//   constructor(tires, glass, steering) {
//       this.tires = tires;
//       this.glass = glass;
//       this.steering = steering;
//   }

//   static calculateCars(car, Tires, Glass, Steering) {
//       const maxCarsByTires = Tires / car.tires;
//       const maxCarsByGlass = Glass / car.glass;
//       const maxCarsBySteering = Steering / car.steering;

//       return Math.min(maxCarsByTires, maxCarsByGlass, maxCarsBySteering);
//   }
// }

// const car1 = new Car(5, 3, 1);
// const car2 = new Car(4, 4, 1);

// const totalTires = 500;
// const totalGlass = 300;
// const totalSteering = 100;

// const car1Count = Car.calculateCars(car1, totalTires, totalGlass, totalSteering);
// const car2Count = Car.calculateCars(car2, totalTires, totalGlass, totalSteering);

// console.log(`1st car no: ${car1Count} car`);
// console.log(`2nd car no: ${car2Count} car`);

// array

// const colors = ["red", "yellow", "blue", "green", "balck"];


// const RCCESID_WDD_01= ["Tomal","Makarim","Pollob","Sabbir","Shovon","Fahamida","Symaiya","Tota", "Shahautta","Akbor"]

// const arrey= [2,5,8,4,1,9];
// const chack=(chack_value) => chack_value<10;
// console.log(arrey.every(chack));









// console.log(RCCESID_WDD_01.copyWithin(1,2,5))
// remove 1(makarim) change 2 (pollob) last one make dpuball
// show vale
// console.log(colors.length)
// console.log(colors [0])
// console.log(colors [0])
// index number

// Array.prototype.every() bolon value rutn kore
// emuteable  
// mutable -object arry

// every
// const col =(value) => value <50;
// const arrys = [1,5,11,15,49];
// console.log(arrys.every(col));
// filll
const arrey= [0,5,6,8,3];
const find = (elememt) => elememt > 5;
console.log(arrey.findIndex(find))


// const A = [50, 107, 'shovon', 83, 0 , 'arraf' ,'sabbir', 'son', true];
// const result = A.filter(chack => typeof chack === 'string');
// console.log("new straing array : " +result)
// const result2 = A.filter(chack => typeof chack === 'number');
// console.log("new numbere array: " + result2)

// const arrys = [0,5,6,8,3];
// console.log(arrys.fill(1,2,4));
// fliiter
// const colors = ["red", "yellow", "blue", "green", "balck"];

// const result =colors.filter((colors)=> colors.length>4);
// console.log(result)
// find
// const arrys = [0,51,6,8,31];

// const found = arrys.find((finds) => finds > 5);

// console.log(found)
/*
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]



Array.prototype.includes()


const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false

*/
// map


// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => {if(x%2==0){
//     console.log(x + " even numer")
// }
// else( console.log(x + " odd number"))
// }

// );

// console.log(map);
// Expected output: Array [2, 8, 18, 32]

// const arr1 = [1, 2, 1];

// const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

// console.log(result);
// // Expected output: Array [1, 2, 2, 1]

// const naame = [ "one","two", "three" , "four", "five", "six" , "seven","eight","nine","ten"];
// console.log(naame);
// JavaScript Demo: Array.slice()
// console.log(naame.slice(2,-2));
// // remove 1st 2 or last 2 elemet rwmove
// console.log(naame.pop())
// console.log(naame.pop())
// // console lst  one  nd call agine the laast two 
// // push 
// naame.push("eleven","telve")
// console.log (naame)
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log(day)
// const naame = [ "one","two", "three" , "four", "five", "six" , "seven","eight","nine","ten"];
// console.log(naame.indexOf("three"))
// console.log(naame.join(''))
// console.log(naame.join('-'))
// const naame = [ "one","two", "three" , "four", "five", "six" , "seven","eight","nine","ten"];
// console.log(naame.lastIndexOf("three"))
// const naame = [ "one","two", "three" , "four", "five", "six" , "seven","eight","nine","ten"];
// console.log(naame)
// const reversed = naame.toReversed();
// console.log(reversed)
// const naame = [ "one","two", "three" , "four", "five", "six" , "seven","eight","nine","ten"];
// const rename =[];
// for (lat rename of )

// const arrey_1 =[1,2,5,8,9];
// const arrey_2 = arrey_1.map((x) => x -5);

// console.log(arrey_2);
// let arrey_1 =[1,2,5,8,9];
// let arrey_2 = [];
// for (let x of arrey_1){
//     arrey_2.push(x+5);
// }
// // console.log(arrey_2)
// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const tank_01= 1;
// const sum = array.reduce(
//   (tank_02, tank_03) => tank_02 * tank_03,
//   tank_01,
// );

// console.log(sum);
// Expected output: 10
// fact=1;
// for(let i =1 ;i<6;i++ )
// fx
// let fact = 1;
// for (i = 1; i <= 6; i++) {
//     fact *= i;
// }
// console.log(`The factorial of ${6} is ${fact}.`);
// const naame = [ "one","two", "three" , "four", "five", "six" , "seven","eight","nine","ten"];
// naame.sort();
// console.log(naame)


// dot notasion bracket notarion 

const str = 'The quick brown fox jumps over the lazy dog.';
