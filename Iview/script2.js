// const Employeelist = {
// empid = document.getElementById("empid").value,
//  fname = document.getElementById("fname").value,
//  mname = document.getElementById("mname").value,
//  lname = document.getElementById("lname").value,
//  gender = document.getElementById("gender").value,
//  dob = document.getElementById("dob").value,
//  age = document.getElementById("age").value
// }
// window.localStorage.setItem("Employeelist",JSON.stringify(Employeelist));
// console.log(Employeelist);

// function elist(empid, fname, mname, lname, gender, dob, age) {
//   this.empid = empid;
//   this.fname = fname;
//   this.mname = mname;
//   this.lname = lname;
//   this.gender = gender;
//   this.dob = dob;
//   this.age = age;
// }

// function elist() {
//   // get input data from input box

//   var Empid = document.getElementById("empid").value;
//   var Fname = document.getElementById("fname").value;
//   var Mname = document.getElementById("mname").value;
//   var Lname = document.getElementById("lname").value;
//   var Gender = document.getElementById("gender").value;
//   var Dob = document.getElementById("dob").value;
//   var Age = document.getElementById("age").value;

//   // array to store objects

//   let Employeelist = [];

//   // push the instances to the mybooks array

//   Employeelist.push(Empid);
//   Employeelist.push(Fname);
//   Employeelist.push(Mname);
//   Employeelist.push(Lname);
//   Employeelist.push(Gender);
//   Employeelist.push(Dob);
//   Employeelist.push(Age);

//   // store mybooks to the localStorage

//   localStorage.Employeelist = JSON.stringify(Employeelist);

//   // retrieve data from the localStorage

//   let data = JSON.parse(localStorage.getItem("Employeelist"));
// }
//     function calculate_age() {
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms);

//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// $(document).ready(function () {
//       var age = "";
//       $("#dob").datepicker({
//         onSelect: function (value, ui) {
//           var today = new Date();
//           age = today.getFullYear() - ui.selectedYear;
//           $("#age").val(age);
//         },
//         changeMonth: true,
//         changeYear: true,
//       });
//     });
// instances of the Book object
// let Employee = new elist(document.getElementById("empid","fname","mname","lname","gender","dob","age"));
// let Fname = new elist(document.getElementById("fname").value);
// let Mname = new elist(document.getElementById("mname").value);
// let Lname = new elist(document.getElementById("lname").value);
// let Gender = new elist(document.getElementById("gender").value);
// let Dob = new elist(document.getElementById("dob").value);
// let Age = new elist(document.getElementById("age").value);

var getValue = document.querySelector('#save');
getValue.oneclick = () => {
    var EmployeeId = document.getElementById("empid").value;
    var FirstName = document.getElementById("fname").value;
    var MiddleName = document.getElementById("mname").value;
    var LastName = document.getElementById("lname").value;
    var Gender = document.getElementById("gender").value;
    var DateOfBirth = document.getElementById("dob").value;
    var Age = document.getElementById("age").value;
}
var Employeelist = [];
class Employee {
  constructor(empid, fname, lname, gender, dob, age) {
    this.empid = empid;
    this.fname = fname;
    this.lname = lname;
    this.gender = gender;
    this.dob = dob;
    this.age = age;
  }
  // Method
  fullname() {
    return this.empid + this.fname + " " + this.lname + this.gender + this.dob;
  }
  // Get Age
  getAge() {
    this.age =
      new Date(new Date() - new Date(this.dob)).getUTCFullYear() - 1970;
  }
}

const emp1 = new Employee(EmployeeId,FirstName,LastName,Gender,DateOfBirth,Age);
emp1.getAge();
Employeelist.push(emp1);

// const emp2 = new Employee(getValue);
// emp2.getAge();
// Employeelist.push(emp2);

localStorage.Employeelist = JSON.stringify(Employeelist);

