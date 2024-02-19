import EmployeeName from "./EmployeeDetail";
import EmployeeDetail from "./EmployeeDetail";
import './EmployeeList.css'

const EmployeeList = props => {
console.log(props)
    if (props.items.length === 0) {
        return <h2 className="employees-list__fallback"> No Employees Found !!</h2>
    }
    return (
        <ul className="employee-list">
            {
                props.items.map((employee) => (<EmployeeName 
                    key={employee.id}
                    setRefresh={props.setRefresh} 
                    id={employee.id}
                    dob={employee.dob} 
                    name={employee.name} 
                    exp={employee.exp} />))
            }
        </ul>
    )
}
export default EmployeeList;