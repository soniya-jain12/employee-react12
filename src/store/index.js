import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit'

const Employees=[
    {id:'E1',name:'Soniya',dob:new Date(2001,12,12),exp:4},
    {id:'E2',name:'Aahana',dob:new Date(2001,1,17),exp:3},
    {id:'E3',name:'Aadi',dob:new Date(2001,22,3),exp:2},
    {id:'E4',name:'Prerna',dob:new Date(2001,2,8),exp:1},
];

const initialState={items:Employees};
const employeeSlice= createSlice({
    name: 'employee',
    initialState: initialState,
    reducers:{
        addEmployee(state,action){
            const employeeData={
                ...action.payload,
                id: Math.random().toString()
            };
    
            state.items.push(employeeData);

        },
        removeEmployee(state, action) {
            const employeeIdToRemove = action.payload.id;
            console.log(employeeIdToRemove)
            state.items = state.items.filter(employee => employee.id !== employeeIdToRemove);
         }
    }
});
export const sendEmployeeData = (employeeData) => {

    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await  fetch('https://tricon-2e6b8-default-rtdb.firebaseio.com/employee.json', {
                method: 'PUT',
                body: JSON.stringify(employeeData),
              });

              if(!response.ok) {
                throw new Error("Sending employee data failed!");
              }
        };

        try {
            await sendRequest();
        }catch (error) {
            console.log(error);
        }
    };
}

const employeeStore=configureStore({
    reducer:employeeSlice.reducer
});
export default employeeStore;
export const employeeActions = employeeSlice.actions;