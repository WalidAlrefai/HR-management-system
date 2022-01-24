'use strict';
let allEmployee=[]
function Employee(EmployeeID,FullName,Department,Level){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.img = "#";
    allEmployee.push(this);
}
 
Employee.prototype.resultOfSalary = function(){
    var salary = 0 ;
    if(this.Level =="Senior"){
        salary = Math.random() * (2000 - 1500) + 1500
    }else if(this.Level =="Mid-Senior"){
        salary = Math.random() * (1500 - 1000) + 1000
    }else if(this.Level =="Junior"){
        salary = Math.random() * (1000 - 500) + 500
    }
        var taks = (salary*0.075)
        var isSalary = salary-taks 
    return isSalary

}
let employee1 = new Employee(1000 , "Ghazi Samer" , "Administration" , "Senior");
let employee2 = new Employee(1001 , "Lana Ali" , "Finance" , "Senior");
let employee3 = new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" );
let employee4 = new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior");
let employee5 = new Employee(1004 , "Omar Zaid" ,    "Development" , "Senior" );
let employee6 = new Employee(1005 , "Rana Saleh" , "Development" , "Junior");
let employee7 = new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior");
 
Employee.prototype.render = function(){
    let Salary = this.resultOfSalary();
    document.write(` <h1> ${this.FullName} </h1>`)
    document.write(`  ${Salary}`)
}




for(let i = 0 ; i < allEmployee.length ; i++){
    allEmployee[i].render();
}
