import EmployeeFilter from './EmployeeFilter';
import './EmployeeDetail.css'
import React,{useState} from 'react';
import EmployeeDate from './EmployeeDate';
import Card from '../UI/card';
import { employeeActions } from '../store';
import { useDispatch } from "react-redux";

function EmployeeName(props){
    const [name,setname]= useState(props.name);
    const dispatch = useDispatch();
    const clickHandler = (employeeData)=>{
        dispatch(employeeActions.removeEmployee(employeeData));
        console.log(employeeData)
        props.setRefresh(preve=>!preve)
        // console.log('clicked...');
        // setname('Changed!');
    }
console.log(props)
    return(
        <div>
        <li>
            <Card className='employee-item'>
                <EmployeeDate dob={props.dob} />
                <div className="employee-item_description">
                    <h2>{props.name}</h2>
                    <div className="employee-item_price">{props.exp}</div>
                    <div onClick = {()=>clickHandler(props)}>Remove</div>
                </div>
            </Card>
        </li>
        </div>
    )
}
export default EmployeeName;