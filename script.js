// //methods for Numbers, Dates, And Math
// //Number
// //toFixed() - formatting numbers to a fixed decimal places
// let num = 3.141956
// console.log(num.toFixed(5))

// //parseInt() - Converting strings to integers or foating-point numbers
// let str = "10.5"
// console.log(parseInt(str))
// console.log(parseFloat(str))

// //toPrecision()
// let num1= 123.45678
// console.log(num1.toPrecision(5))

// //isInteger()
// console.log(Number.isInteger((-1/2)^2))
// console.log(Number.isNaN(NaN))

// //IsFinite
// console.log(Number.isFinite(25^15))

// console.log(Number.isFinite(25^15/0))

// //Date
// let today = new Date()
// console.log(today)

// //getDate //getDay //getMonth //getYear //getHours
// console.log(today.getDate())
// console.log(today.getDay())
// console.log(today.getMonth())
// console.log(today.getFullYear())
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())
// console.log(today.getMilliseconds())
// console.log(today.getTime())


// //setDate //setDay //setMonth //setFullYear


// //Math Methods
// //abs() - absolute value
// console.log(Math.abs(-5))

// //ceil() - rounding up to the nearest integer
// console.log(Math.ceil(3.7))

// //floor - rounding up tp the lowest integer
// console.log(Math.floor(3.7))


// //max() - returns the largest of the given values
// console.log(Math.max(1, 2, 3, 4, 5))

// //round()
// console.log(Math.round(-6.1))
// //min() - returns the smallest of the given values
// console.log(Math.min(5,5,6,1,2,1.1))

// //power - pow()
// console.log(Math.pow(2, 3))

// //square root - sqrt()
// console.log(Math.sqrt(289))

// //random 
// console.log(Math.random()*1000000)


//======================================TASK==================


//To convert the time into 24-12hrs :-

let hor=new Date()
let hrs=hor.getHours()
function hors(){
    if(hrs>12){
        console.log(hrs-12)
    }else{
        console.log(hrs)
    }
}
hors(hrs)

// Generate the 6 digit otp:-

function otp(){
    console.log((Math.random(otp)*1000000).toFixed(0))
}
otp(otp)

// let x=prompt("enter input")
// function otp(){
//     console.log((Math.random(otp)*(Math.pow(10,6))).toFixed(0))
// }
// otp()

// function to return day of the week 

let today=new Date
let day=today.getDay()
function days(day){
    if(day==1){
        console.log("mon")
    }
    else if(day==2){
        console.log("tues")
    }
    else if(day==3){
        console.log("wed")
    }
    else if(day==4){
        console.log("thurs")
    }
    else if(day==5){
        console.log("fri")
    }
    else if(day==6){
        console.log("sat")
    }
    else{
        console.log("sun")
    }  
}
days(day)
