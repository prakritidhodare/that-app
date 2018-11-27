import React,{Component} from 'react';
import EmployeeService from './EmployeeService';
import {NavLink} from 'react-router-dom';

export default class Employee extends Component{

    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.match.params.number);
        const employee=EmployeeService.get(parseInt(this.props.match.params.number,10));
        return(<div>
<h1>This is Employee Component!</h1>
    <h3>#EmployeeName:{employee.name}</h3>
    <h3>#Email:{employee.email}</h3>
    <h3>#EmpId:{employee.number}</h3>
<NavLink to='/'>Back</NavLink>
        </div>);
    }
}