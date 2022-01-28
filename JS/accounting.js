'use strict';
console.log('helooooo');
let depTable =document.getElementById("depTable");
// let table =document.getElementById("table");

let data =localStorage.getItem("Employees");
let parseData =JSON.parse(data);

console.log(parseData);


//     console.log(parseDataa[0].Department);
//     let table = document.createElement("table");
    
//     let thead = document.createElement("thead");
//     let tbody = document.createElement("tbody");
//     let tfoot = document.createElement("tfoot");
//     let th = document.createElement("th");
//     let th1 = document.createElement("th");
//     let th2 = document.createElement("th");
//     let th3 = document.createElement("th");
//     let th4 = document.createElement("th");
//     depTable.appendChild(table);
//     table.appendChild(thead);
//     table.appendChild(tfoot);
//     table.appendChild(tbody);
//     thead.appendChild(th);
//     thead.appendChild(th1);
//     thead.appendChild(th2);
//     thead.appendChild(th3);
//     thead.appendChild(th4);
//     th.textContent = "Department";
//     th1.textContent = "Number of  employees";
//     th2.textContent = "Total Salary";
//     th3.textContent ="Average" ;
//     th4.textContent = "Total";
let theMainDiv=document.getElementById("main");
       let table=document.createElement('table');
       theMainDiv.appendChild(table);
        let tablerone=document.createElement('tr');  
        table.appendChild(tablerone);
        let tablehone = document.createElement('th');
        tablehone.textContent = "Department";
        tablerone.appendChild(tablehone);
        let tablehtwo =document.createElement('th');
        tablehtwo.textContent="Nunmer of employees";
        tablerone.appendChild(tablehtwo);

        let tablehthree= document.createElement('th');
         tablehthree.textContent='Total Salary';
        tablerone.appendChild(tablehthree)
        ;
        let tablehfour=document.createElement('th');
         tablehfour.textContent="Average";
        tablerone.appendChild(tablehfour);
        

        let tablertwo=document.createElement('tr');  
        table.appendChild(tablertwo);
        let tableDone = document.createElement('td')
        tableDone.textContent="Administration";
        tablertwo.appendChild(tableDone);

        let tableDtwo =document.createElement('td');
        tableDtwo.innerHTML=employeesOfAdministration();
        tablertwo.appendChild(tableDtwo);

        let tableDthree= document.createElement('td');
         tableDthree.innerHTML=salaryOfAdministration();
        tablertwo.appendChild(tableDthree);

        let tableDfour=document.createElement('td');
         tableDfour.innerHTML=aveOfSalaryOfAdminsitration();
        tablertwo.appendChild(tableDfour);
        

        
        let tablerThree=document.createElement('tr');  
        table.appendChild(tablerThree);
        let tableDfive = document.createElement('td')
        tableDfive.innerHTML="Marketing";
        tablerThree.appendChild(tableDfive);

        let tableDsix =document.createElement('td');
        tableDsix.innerHTML=employeesOfMarketing();
        tablerThree.appendChild(tableDsix);

        let tableDseven= document.createElement('td');
         tableDseven.innerHTML=salaryOfMarketing();
        tablerThree.appendChild(tableDseven);

        let tableDeight=document.createElement('td');
         tableDeight.innerHTML=aveOfSalaryOfMarketing();
        tablerThree.appendChild(tableDeight);
        

        let tablerFour=document.createElement('tr');  
        table.appendChild(tablerFour);
        let tableDnine = document.createElement('td')
        tableDnine.innerHTML="Development";
        tablerFour.appendChild(tableDnine);
        let tableDten =document.createElement('td');
        tableDten.innerHTML=employeesOfDevelopment();
        tablerFour.appendChild(tableDten);

        let tableDeleven= document.createElement('td');
         tableDeleven.innerHTML=salaryOfDevelopment();
        tablerFour.appendChild(tableDeleven);

        let tableDtwelve=document.createElement('td');
         tableDtwelve.innerHTML=aveOfSalaryOfDevelopment();
        tablerFour.appendChild(tableDtwelve);
        
        
        let tablerFive=document.createElement('tr');  
        table.appendChild(tablerFive);
        let tableDtherteen = document.createElement('td')
        tableDtherteen.innerHTML="Finance";
        tablerFive.appendChild(tableDtherteen);
        let tableDfourteen =document.createElement('td');
        tableDfourteen.innerHTML=employeesOfFinance();
        tablerFive.appendChild(tableDfourteen);

         tableDeleven= document.createElement('td');
         tableDeleven.innerHTML=salaryOfFinance();
        tablerFive.appendChild(tableDeleven);
        
         tableDtwelve=document.createElement('td');
         tableDtwelve.innerHTML=aveOfSalaryOfFinance();
        tablerFive.appendChild(tableDtwelve);
        //
        let footer = table.createTFoot();
        let row = footer.insertRow(0);
        let feild = row.insertCell(0);
        feild.innerHTML = "Total";
        let feild1 = row.insertCell(1);
        feild1.innerHTML = totalOfEmployees();
        let feild2 = row.insertCell(2)
        feild2.innerHTML = totalOfAllSalary();
        let feild3 = row.insertCell(3);
        feild3.innerHTML = avarageOfAllSalary();

    function employeesOfAdministration(){
        let x = 0 ;
        parseData.forEach(element => {
            if( element.Department == "Administration"){
                x++ ;
            }
        }); 
        return x  ;
    }
    // employeesOfAdministration();
    function salaryOfAdministration(){
        let x =0;
        parseData.forEach(element => {
            if(element.Department == "Administration"){
                x += element.isSalary ;
            }
            
        });
        
        return x;
    }
    function aveOfSalaryOfAdminsitration(){
        return salaryOfAdministration()/employeesOfAdministration()
    }
    
    function employeesOfMarketing(){
        let x = 0 ;
        parseData.forEach(element => {
            if( element.Department == "Marketing"){
                x++
            }
        }); 
         return x ;
    }

    function salaryOfMarketing(){
        let x =0;
        parseData.forEach(element => {
            if(element.Department == "Marketing"){
                x += element.isSalary
            }
            
        });
        return x;
    }
    function aveOfSalaryOfMarketing(){
        return salaryOfMarketing()/employeesOfMarketing()
    }

    
    
    function employeesOfDevelopment(){
        let x = 0 ;
        parseData.forEach(element => {
            if( element.Department == "Development"){
                x++
            }
        }); 
         return x ;
    }

    function salaryOfDevelopment(){
        let x =0;
        parseData.forEach(element => {
            if(element.Department == "Development"){
                x += element.isSalary
            }
            
        });
        return x;
    }
    function aveOfSalaryOfDevelopment(){
        return  salaryOfDevelopment()/ employeesOfDevelopment()
    }
    function employeesOfFinance(){
        let x = 0 ;
        parseData.forEach(element => {
            if( element.Department == "Finance"){
                x++
            }
        }); 
         return x ;
    }

    function salaryOfFinance(){
        let x =0;
        parseData.forEach(element => {
            if(element.Department == "Finance"){
                x += element.isSalary
            }
            
        });
        return x;
    }
    function aveOfSalaryOfFinance(){
        
        return salaryOfFinance()/employeesOfFinance();
    }

    function totalOfEmployees(){
        
        let x = 0 
        parseData.forEach(element => {
            x++
            
        });
        return x
    }
    function totalOfAllSalary(){
        let x =0 ;
        parseData.forEach( element => {
            x += element .isSalary
        });
        return x ;
    }

    function avarageOfAllSalary(){
        let x =0 ;
        parseData.forEach(element => {
            x += element.isSalary;

        });
        x = x  / totalOfEmployees()
        return x
    }



