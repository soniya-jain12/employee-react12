import { createContext, useReducer } from "react";
import { useState } from "react";

export const EmployeeContext = createContext({
    items:[],
    onSaveEmployeeData: () => {},
});

function employeeReducer(state,action){
    const updatedEmployees=[...state]

    if(action.type ==='ADD_EMPLOYEE'){
        const employeeData={
            ...action.payload,
            id: Math.random().toString()
        };

        updatedEmployees.push(employeeData);
    }
    return updatedEmployees;
}


export default function EmployeeContextProvider({children}){
    const DUMP_EMPLOYEES=[
        {id:'E1',name:'Soniya',dob:new Date(2001,12,12),exp:4},
        {id:'E2',name:'Aahana',dob:new Date(2001,1,17),exp:3},
        {id:'E3',name:'Aadi',dob:new Date(2001,22,3),exp:2},
        {id:'E4',name:'Prerna',dob:new Date(2001,2,8),exp:1},
    ];
    
    const[employees,dispatch]=useReducer(employeeReducer,DUMP_EMPLOYEES);

    const addEmployeeHandler=employee=>{
        dispatch(
            {
                type: 'ADD_EMPLOYEE',
                payload:employee
            }
        )
    }
    const contextValue={
        items: employees,
        onSaveEmployeeData: addEmployeeHandler
    };
    return <EmployeeContext.Provider value={contextValue}>
        {children}
    </EmployeeContext.Provider>
}