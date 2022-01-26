'use strict';

let allEmployee=[]
let employeeDiv = document.getElementById("employee");
let from = document.getElementById("from");
let element = document.getElementById("element").parentNode;

function Employee(FullName,Department,Level,img){
    this.EmployeeID = 0;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.isSalary = 0
    this.img = img;
    allEmployee.push(this);
}
 
Employee.prototype.resultOfSalary = function(){
    var salary = 0 ;
    if(this.Level =="Senior"){
        salary = Math.floor( Math.random() * (2000 - 1500) + 1500)
    }else if(this.Level =="Mid-Senior"){
        salary =  Math.floor(Math.random() * (1500 - 1000) + 1000)
    }else if(this.Level =="Junior"){
        salary = Math.floor( Math.random() * (1000 - 500) + 500)
    }
        var taks = (salary*0.075)
        this.isSalary = salary-taks 
    return this.isSalary

}
 Employee.prototype.newId = function (){
     var empid = 0 ;
    empid = Math.floor(1000 + Math.random() * 9000);

    this.EmployeeID=empid 
    return this.EmployeeID
}

let employee1 = new Employee( "Ghazi Samer" , "Administration" , "Senior" , "assets/Ghazi.jpg");
let employee2 = new Employee( "Lana Ali" , "Finance" , "Senior", "assets/Lana.jpg");
let employee3 = new Employee( "Tamara Ayoub" , "Marketing" , "Senior", "assets/Tamara.jpg" );
let employee4 = new Employee( "Safi Walid" , "Administration" , "Mid-Senior", "assets/Safi.jpg");
let employee5 = new Employee( "Omar Zaid" ,    "Development" , "Senior" , "assets/Omar.jpg");
let employee6 = new Employee( "Rana Saleh" , "Development" , "Junior", "assets/Rana.jpg");
let employee7 = new Employee( "Hadi Ahmad" , "Finance" , "Mid-Senior","assets/Hadi.jpg");


Employee.prototype.render = function () {
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#FFADF0";
    newDiv.style.color = "white";
    newDiv.style.width = "250px";
    newDiv.style.padding = "20px";
    newDiv.style.margin = "20px";
  

     let image = document.createElement('img') ; 
    image.setAttribute("src", this.img);
    newDiv.appendChild(image).width ="200";
    employeeDiv.appendChild(newDiv);

    let Name = document.createElement('h4');
    Name.textContent = this.FullName;
    newDiv.appendChild(Name);
    employeeDiv.appendChild(newDiv);

    // element.insertBefore(newDiv, image);

    let Empid = document.createElement('h5');
    Empid.textContent = this.newId();
    newDiv.appendChild(Empid);
    employeeDiv.appendChild(newDiv);

    
    let Depart = document.createElement('h5');
    Depart.textContent = this.Department;
    newDiv.appendChild(Depart);
    employeeDiv.appendChild(newDiv);

    let Salar = document.createElement('h5');
    Salar.textContent = this.resultOfSalary();
    newDiv.appendChild(Salar);
    employeeDiv.appendChild(newDiv);

    
  
    // let image = document.createElement('img') ; 
    // image.setAttribute("src", this.img);
    // employeeDiv.appendChild(image).width ="100";

    // let Name = document.createElement('h4');
    // Name.textContent = this.FullName;
    // employeeDiv.appendChild(Name);

    // let Empid = document.createElement('h5');
    // Empid.textContent = this.newId();
    // employeeDiv.appendChild(Empid);

    
    // let Depart = document.createElement('h5');
    // Depart.textContent = this.Department;
    // employeeDiv.appendChild(Depart);

    // let Salar = document.createElement('h5');
    // Salar.textContent = this.resultOfSalary();
    // employeeDiv.appendChild(Salar);

console.log(this);

}

 
// Employee.prototype.render = function(){
//     var employee = this.newId()
//     var Salary = this.resultOfSalary();
//     document.write(` ${this.EmployeeID }  `)
//     document.write(` <h1> ${this.FullName} </h1> <br>`)
//     document.write(`  ${this.isSalary}`)
// }




for(let i = 0 ; i < allEmployee.length ; i++){
    allEmployee[i].render();
}


from.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    //  console.log(event.target)
    let fullName = event.target.fullName.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let Image = event.target.image.value;

    let newEmployee = new Employee(fullName,Department,Level,Image);
   
    newEmployee.resultOfSalary()
    newEmployee.render()
//     console.log(fullName) 
//     console.log(Department) 
//    console.log(Level)
//    console.log(Image)
   
}
   
