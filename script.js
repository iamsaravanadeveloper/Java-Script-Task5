// // Level 1 — Basics
// // Task 1: Student Details
// let studentName="Saravana Kumar M"
// let age=23
// let department="M.SC Computer Science"
// let cgpa=8.5
// console.log("Name : "+studentName);
// console.log("Age : "+age);
// console.log(`Department : +${department}`);
// console.log(`CGPA : +${cgpa}`);

// // Task 2: Simple Calculator
// let a=20
// let b=10

// console.log("addtion :",a+b)
// console.log("Subtraction :",a-b)
// console.log("Multiplication :",a*b)
// console.log("Division :",a/b)
// console.log("Modulus :",a%b)
// console.log("Power :",a**b)
// // Task 3: Age Checker

// let voterAge=prompt("Enter Your Age")
// if(voterAge>=18){
//     console.log("Eligible to Vote")
// }
// else{
//     console.log("Not Eligible to Vote")
// }


// // Task 4: Student Grade

// let studentMark=Number(prompt("Enter Your Mark"))
// if(studentMark>=90 && studentMark<=100){
//     console.log("A Grade")
// }
// else if(studentMark>=80 && studentMark<=89){
//     console.log("B Grade")
// }
// else if(studentMark>=70 && studentMark<=79){
//     console.log("C Grade")
// }
// else if(studentMark>=60 && studentMark<=69){
//     console.log("D Grade")
// }
// else{
//     console.log("Fail")
// }

// // Task 5: Login System
// let correctUsername = "admin"
// let correctPassword = "1234"
// let enteredName=prompt("Enter Your User Name")
// let enteredPass=prompt("Enter Your Password")
// if(correctUsername==enteredName){
//     if(correctPassword==enteredPass){
//         console.log("Login Successful")
//     }
//     else{
//         console.log("Invalid password")
//     }
// }
// else{
//     console.log("Invalid username")
// }

// // Task 6: ATM Withdrawal
// //Using Nested if-else
// let balance=10000;
// let withdrawalAmount=Number(prompt("Enter Withdrawal Amount"))
// if(withdrawalAmount>0){
//     if(withdrawalAmount<=balance){
//         if(withdrawalAmount % 100 ===0){
//             console.log("Withdrawal Successful")
//             console.log(`Remaining Balance : ${balance-withdrawalAmount}`)
//         }
//         else{
//         console.log("Only We Have 100 Rupees Notes")
//     }
//     }
//     else{
//         console.log("Withdrawal Amount Must be Lessthen or Equal Amout")
//     }
// }
// else{
//     console.log("Withdrawal Amount Must be Above 0")
// }

// // Task 7: Multiplication Table
// // using for loop
// let number=7;
// for(let i=1;i<=10;i++){
//     console.log(`${number} X ${i} = ${number*i}`)
// }
// // Task 8: Reverse Number
// // Input:
// // 12345
// // Output:
// // 54321
// // Using for loop.
// let inputValue=12345;
// let numTOstr=String(inputValue)
// let reversed="";
// for(let j=numTOstr.length-1;j>=0;j--){
//     reversed+=numTOstr[j]
// }
// let strTOnum=Number(reversed)
// console.log(strTOnum)
// // Task 9: OTP System
// // Create:
// // correctOTP = 1234
// // Give the user maximum 3 attempts.
// // Correct → OTP verified
// // Wrong → Try again
// // 3 wrong attempts → Account blocked
// // This builds directly on the OTP while-loop example in your notes.
// let correctOTP=1234;
// let attempt=3;
// while(attempt>0){
//     let enteredOTP=Number(prompt("Enter OTP"))
//     if(correctOTP===enteredOTP){
//         console.log("OTP is Verified")
//         break
//     }
//     attempt--
// }
// if(attempt===0){
//     console.log("Account Locked")
// }

// // Task 10: Salary Calculator
// function calculateSalary(basicSalary, bonus){
//     return basicSalary+bonus
// }
// let call=calculateSalary(30000,5000)
// console.log(call)

// // Task 11: Calculator Function
// // Create separate functions:
// // add()
// // subtract()
// // multiply()
// // divide()
// // Then call them with different values.
// function add(a,b){
//     return a + b
// }
// function subtract(a,b){
//     return a - b
// }
// function multiply(a,b){
//     return a * b
// }
// function divide(a,b){
//     return a / b
// }
// function calculator(callback,a,b){
//     console.log(callback(a,b))
// }
// calculator(add,20,20)
// calculator(subtract,30,20)
// calculator(multiply,40,40)
// calculator(divide,100,20)

// // Task 12: Eligibility Function
// let checkEligibility=(age, height, weight)=>{
//     if(age>=21){
//         if(height>=170){
//             if(weight>=70){
//                 console.log("You Are Eligible")
//             }
//             else{
//                 console.log("We Want Weight 70 or Above 70 ")
//             }
//         }
//         else{
//             console.log("We Want Height 170 or Above 170 ")
//         }
//     }
//     else{
//         console.log("We Want Age 21 or Above 21 Aged Person");
//     }
// }
// checkEligibility(21,80,185)

// Task 13: Shopping Cart
let cart = ["Laptop", "Mouse", "Keyboard"];
cart.push("Monitor")
cart.splice(1,1)
cart.pop()
console.log("Task 13: Shopping Cart")
console.log(cart)

// Task 14: Find Maximum
let numbers = [10, 45, 23, 89, 12, 67];
let assentingOrder =numbers.sort((a,b)=>{
    return a - b
})
console.log("Task 14: Find Maximum Number")
console.log(`Maxium Number is : ${assentingOrder[assentingOrder.length-1]}`)

// Task 15: Remove Duplicate Values
// Input:
// [1, 2, 3, 2, 4, 1, 5]
// Output:
// [1, 2, 3, 4, 5]
let arr=[1, 2, 3, 2, 4, 1, 5];
let out=arr.filter((v,i)=>{
    return (arr.indexOf(v) === i)  
    //               0===0 //true
    //               1===1 //true
    //               2===2 //true
    //               1===3 //false
    //               4===4 //true
    //               0===5 //false
    //               6===6//true   
})
console.log(out)


// Your notes specifically cover forEach, map, filter, find, reduce, some, and every.
// Task 16: Employee Salary Filter
// Find employees whose salary >= 40000
let employees = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
];
let above40kSalary=employees.filter((value,index)=>{
    return value.salary>=40000
})
console.log(above40kSalary)
// Task 17: Increase Salary
// Using map():
let increaseSalary=employees.map((value,index)=>{
    if(value.salary<40000){
        value.salary+=5000
    }
    else if (value.salary>=40000){
        value.salary+=10000
    }
    return value
})
console.log("Task 17: Increase Salary")
console.log(increaseSalary)
// Task 18: Total Salary
// Using reduce():
let totalSalary=employees.reduce((a,v,i)=>{
    return a+v.salary
},0)
console.log("Task 18: Total Salary")
console.log(`Total Salary : ${totalSalary}`)
// Task 19: Check Employee
// Using some():
// Is there any employee earning more than ₹100000?
console.log("Task 19: Check Employee")
let oneLakhSalaryEmp=employees.some((val,i)=>{
    return val.salary>100000
})
console.log("Is there any employee earning more than ₹100000?")
if(oneLakhSalaryEmp){
    console.log("Yes Some Empolyees Earning More than ₹100000")
}
else{
    console.log("No One Earning More than ₹100000")
}
// Using every():
// Are all employees earning at least ₹20000?
let twintyThousandSalaryEmp=employees.every((val,i)=>{
    return val.salary>=20000
})

console.log("Are all employees earning at least ₹20000?")
if(twintyThousandSalaryEmp){
    console.log("Yes All Empolyees Earning ₹20000")
}
else{
    console.log("No All Empolyees Earning ₹20000")
}


// Task 20: Employee Management Mini Program

let employees1 = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
  },
  {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
  },
   {
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
  }
];

console.log("Printing All Empolyees")
employees1.forEach((value,index)=>{
    console.log(value)
})
console.log("Printing IT Empolyees")
let ITemployees=employees1.filter((value,index)=>{
    return value.department==="IT"
})
console.log(ITemployees)



console.log("Find employee with salary ₹45000 using find()")

let find45kSalaryEmp=employees1.find((v,i)=>{
    return v.salary===45000
})
console.log(find45kSalaryEmp)

console.log("10% Salary Increasing For Every Employees")

let increaseSalary1=employees1.map((v,i)=>{
    let incrementCalculator=v.salary*10/100
    v.salary+=incrementCalculator
    return v
})
console.log(increaseSalary1)

let totalSalary1=employees1.reduce((a,v,i)=>{
    return a+v.salary
},0)
console.log("Calculate total salary using reduce()")
console.log(`Total Salary : ${totalSalary1}`)

console.log("Check whether anyone earns above ₹50000 using some()")
let fiftyThousandSalaryEmp=employees.some((val,i)=>{
    return val.salary>=50000
})
if(fiftyThousandSalaryEmp){
    console.log("Yes Some Empolyees Earning More than ₹50000")
}
else{
    console.log("No One Earning More than ₹50000")
}

console.log("Check whether everyone earns above ₹20000 using every()")
let twintyThousandSalaryEmp1=employees.every((val,i)=>{
    return val.salary>=20000
})
if(twintyThousandSalaryEmp1){
    console.log("Yes All Empolyees Earning ₹20000")
}
else{
    console.log("No All Empolyees Earning ₹20000")
}



console.log("Sort employees by salary from highest → lowest")

let SortingBySalary=employees1.sort((a,b)=>{
    return b.salary - a.salary
})
console.log(SortingBySalary)

console.log("Destructure each employee's name and salary")

let [empoyee1,employee2,employee3]=employees1

console.log(`
    Name :${empoyee1.name} Salary :${empoyee1.salary}\n
    Name :${employee2.name} Salary:${employee2.salary}\n
    Name :${employee3.name} Salary:${employee3.salary}\n`)


console.log("Use the spread operator to create a new employee list")

let newEmployee={...employees1}

console.log(newEmployee)