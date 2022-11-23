//ajax call for gender
let dropdown = document.getElementById("gender");
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Select Gender";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = "/Preeti/gender.json";

const request = new XMLHttpRequest();
request.open("GET", url, true);

request.onload = function () {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].value;
      dropdown.add(option);
    }
  }
};
request.onerror = function () {
  console.error("An error occurred fetching the JSON from " + url);
};
request.send();

var getValue = document.querySelector("#save");
var EmployeeId;
var FirstName;
var MiddleName;
var LastName;
var Gender;
var DateOfBirth;
var Age;
var Employeelist = {};

var Emps = [];

var priviousData = JSON.parse(localStorage.getItem("emps"));

try {
  if (priviousData === []) {
    Emps = [];
  } else {
    priviousData.map((a) => {
      console.log(a);
      Emps.push(a);
    });
  }
} catch (error) {}

console.log(Emps);

getValue.onclick = () => {
  EmployeeId = document.getElementById("empid").value;
  console.error(EmployeeId);

  FirstName = document.getElementById("fname").value;
  console.error(FirstName);

  MiddleName = document.getElementById("mname").value;
  console.error(MiddleName);

  LastName = document.getElementById("lname").value;
  console.error(LastName);

  Gender = document.getElementById("gender").value;
  console.error(Gender);

  DateOfBirth = document.getElementById("dob").value;
  console.error(DateOfBirth);

  var FullName = FirstName + " " + MiddleName + " " + LastName;

  let e1 = new Employee(
    EmployeeId,
    FullName,
    FirstName,
    MiddleName,
    LastName,
    Gender,
    DateOfBirth,
    Age
  );

  //console.log(e1);

  Employeelist = e1;
  e1.getAge();
  Emps.push(Employeelist);

  //Set Data as a String with JSON format

  localStorage.setItem("emps", JSON.stringify(Emps));
};

class Employee {
  constructor(empid, fullName, fname, mname, lname, gender, dob, age) {
    this.empid = empid;
    this.fullName = fullName;
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
    this.gender = gender;
    this.dob = dob;
    this.age = age;
  }
  // Method
  // fullname() {
  //   return this.empid + this.fname + " " + this.lname + this.gender + this.dob;
  // }
  // // Get Age
  getAge() {
    this.age =
      new Date(new Date() - new Date(this.dob)).getUTCFullYear() - 1970;
  }
}
function findage() {
  var PresentDay = new Date();
  var dateOfBirth = new Date(document.getElementById("dob").value);
  var months =
    PresentDay.getMonth() -
    dateOfBirth.getMonth() +
    12 * (PresentDay.getFullYear() - dateOfBirth.getFullYear());
  document.getElementById("age").value = Math.round(months / 12);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function IDGenerator() {
  this.length = 3;
  this.timestamp = +new Date();

  var _getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.generate = function () {
    var ts = this.timestamp.toString();
    var parts = ts.split("").reverse();
    var id = "EMP";

    for (var i = 0; i < this.length; ++i) {
      var index = _getRandomInt(0, parts.length - 1);
      id += parts[index];
    }

    return id;
  };
}


 

 function AddData() {
  window.open('/Preeti/Form.html','_self')
  output = document.querySelector("#empid");
  var generator = new IDGenerator();
  output.value = generator.generate();
}

// document.addEventListener("DOMContentLoaded", function () {
//   // var btn = document.querySelector("#save");
//   output = document.querySelector("#empid");
//   var generator = new IDGenerator();
//   output.value = generator.generate();

  // btn.addEventListener("click", function () {

  // }, false);
// });

function viewData() {
  window.open("/Yasar/Report.html", "_self");
}

// VALIDATION
let EMPID = document.querySelector(".EMPLOYEEID");
let FIRSTNAME = document.querySelector(".FIRSTNAME");
let GENDER1 = document.querySelector(".GENDER1");
let DATEOFBIRTH1 = document.querySelector(".DATEOFBIRTH1");
let btn1 = document.querySelector(".btn1");
btn1.disabled = true;
EMPID, FIRSTNAME, GENDER1, DATEOFBIRTH1.addEventListener("change", stateHandle);

function stateHandle() {
  if (
    document.querySelector(".EMPLOYEEID").value === " " ||
    document.querySelector(".FIRSTNAME").value === " " ||
    document.querySelector(".GENDER1").value === " " ||
    document.querySelector(".DATEOFBIRTH1").value === " "
  ) {
    btn1.disabled = true;
  } else {
    btn1.disabled = false;
  }
}

//Getting value from URL
let params = new URLSearchParams(document.location.search);
let e = params.get("empid");
$("#empid").val(e);
var arrObj = JSON.parse(localStorage.getItem("emps"));
var index = arrObj.findIndex((item) => item.empid === e);
let fname = arrObj[index].fname;
$("#fname").val(fname);
let mname = arrObj[index].mname;
$("#mname").val(mname);
let lname = arrObj[index].lname;
$("#lname").val(lname);
let gender = arrObj[index].gender;
$("#gender").val(gender);
let dob = arrObj[index].dob;
$("#dob").val(dob);
let age = arrObj[index].age;
$("#age").val(age);


 