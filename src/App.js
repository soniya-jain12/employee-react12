import logo from './logo.svg';
import './App.css';
import EmployeeDetail from './Emplyee/EmployeeDetail';
import NewEmployee from './Emplyee/NewEmployee';
import { useState } from 'react';
import Employees from './Emplyee/Employees';
import EmployeeFilter from './Emplyee/EmployeeFilter';
import EmployeeForm from './Emplyee/EmployeeForm';
import { EmployeeContext } from './Emplyee/EmployeeContext';
import EmployeeContextProvider from './Emplyee/EmployeeContext';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo} from 'react';
import {sendExpenseData} from './store'
import employeeStore from './store';

const App=()=> {
  // const items=useSelector(state=>state.items);
  // useEffect(
  //   () => {
  //     fetch('https://tricon-2e6b8-default-rtdb.firebaseio.com/employee.json', {
  //       method:'PUT',
  //       body: JSON.stringify(items)
  //     })
  //   }
  // )
  const dispatch = useDispatch();

  // useEffect(
  //   () => {
  //     dispatch(sendExpenseData(items))
  //   },
  //   [items, dispatch]
  // );

  return (
    <EmployeeContextProvider>
      <div>
      <h1 className='heading'> Employee Dashboard </h1>
        <NewEmployee>
        <EmployeeForm/>
        </NewEmployee>
        <Employees/>
      </div>
      </EmployeeContextProvider>
  );
}

export default App;