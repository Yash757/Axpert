var getValue = document.querySelector('#save');
var EmployeeId;
var FirstName;
var MiddleName;
var LastName;
var Gender;
var DateOfBirth;
var Age;

var Employeelist = {};


var Emps = [];
var priviosData = JSON.parse(localStorage.getItem("emps"));

try {
  if (priviosData === []) {
    Emps = [];

  } else {
    priviosData.map((a) => {
      console.log(a)
      Emps.push(a);
    })

  }

} catch (error) {

}

// console.log(Emps)

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

  let e1 = new Employee(EmployeeId, FirstName, LastName, Gender, DateOfBirth, Age);

  //console.log(e1);

  Employeelist = e1;
  e1.getAge();
  Emps.push(Employeelist);

  //Set Data as a String with JSON format

  localStorage.setItem("emps", JSON.stringify(Emps));


}

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
  // fullname() {
  //   return this.empid + this.fname + " " + this.lname + this.gender + this.dob;
  // }
  // // Get Age
  getAge() {
    this.age =
      new Date(new Date() - new Date(this.dob)).getUTCFullYear() - 1970;
  }
}

function viewData() {
  window.open('/Yasar/Report.html', '_self')
}

(function () {
  function IDGenerator() {

    this.length = 3;
    this.timestamp = +new Date;

    var _getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.generate = function () {
      var ts = this.timestamp.toString();
      var parts = ts.split("").reverse();
      var id = "EMP";

      for (var i = 0; i < this.length; ++i) {
        var index = _getRandomInt(0, parts.length - 1);
        id += parts[index];
      }

      return id;
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector("#save");
    output = document.querySelector("#empid");
    var generator = new IDGenerator();
    output.value = generator.generate();
    btn.addEventListener("click", function () {
    }, false);

  });
})();

function findage() {
  var PresentDay = new Date();
  var dateOfBirth = (new Date(document.getElementById("dob").value));
  var months = (PresentDay.getMonth() - dateOfBirth.getMonth() +
    (12 * (PresentDay.getFullYear() - dateOfBirth.getFullYear())));
  document.getElementById("age").value = Math.round(months / 12);
}

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const gender = document.getElementById('gender');
const dob = document.getElementById('dob');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const genderValue = gender.value.trim();
    const dobValue = dob.value.trim();
   

    if(fnameValue === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
    }

    if(genderValue === '') {
        setError(gender, 'Gender is required');
    } else {
        setSuccess(gender);
    }
    if(dobValue === '') {
      setError(dob, 'Date Of Birth is required');
  } else {
      setSuccess(dob);
  }
    

};




