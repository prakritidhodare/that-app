const EmployeeService={
    employees:[
        {number:1, name:'Tom', email:'tom@gmail.com'},
        {number:2, name:'Mark', email:'mark@gmail.com'},
        {number:3, name:'Merry', email:'merry@gmail.com'}
 ],
 all:function(){
     return this.employees;
 },
    get:function(id){
const employee=p=>p.number===id;
return this.employees.find(employee);
 },
 delete:function(id){
    const employee=p=>p.number===id;
    return  this.employees.slice(id,1);
     }
};
export default EmployeeService;