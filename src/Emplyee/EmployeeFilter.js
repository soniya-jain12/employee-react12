import './EmployeeFilter.css';

const EmployeeFilter = (props) => {
    
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="Year-Filter">
            <label>Filter by Year</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="all">All</option>
                {Array.from({length: new Date().getFullYear() - 1998}, (_, i) => (
                    <option key={i} value={1999 + i}>{1999 + i}</option>
                ))}
            </select>
        </div>
    );
};

export default EmployeeFilter;