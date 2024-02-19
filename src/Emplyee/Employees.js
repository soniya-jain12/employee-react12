import { useState ,useContext, useEffect} from "react";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeDetail from "./EmployeeDetail"
import Card from "../UI/card";
import "./Employees.css"
import EmployeeList from "./EmployeeList";
import { EmployeeContext } from "./EmployeeContext";
import {useSelector} from "react-redux";

const Employee=(props)=>{
    const items = useSelector(state => state.items);
    console.log(items)
    const[filteredYear,setFilteredYear]=useState('ALL');
    const[refresh,setRefresh]=useState(false);
    const [list,setFilteredList]=useState([]);
    const filteredYearHandler= selectedYear=>{
        setFilteredYear(selectedYear);
    }
    
    // console.log(filteredEmployees)
    useEffect(()=>{
        const filteredEmployees = items.filter(employee => {
            if(filteredYear==='all'){
                return true
            }
            else{
                return employee?.dob && employee?.dob?.getFullYear().toString() === filteredYear;
            }
            
        });
        setFilteredList(filteredEmployees)
    },[items,filteredYear,refresh])
    
    return(
        <Card className="employees">
            <EmployeeFilter selected={filteredYear} onChangeFilter={filteredYearHandler}/>
            <EmployeeList items={list} setRefresh={setRefresh}/>
        </Card>
    );
}
export default Employee;