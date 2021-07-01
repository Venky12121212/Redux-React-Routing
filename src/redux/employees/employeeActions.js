import {
    GET_EMPLOYEES_FAILURE,
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEE_FAILURE,
    GET_EMPLOYEE_REQUEST,
    GET_EMPLOYEE_SUCCESS
} from "./employeeActionTypes";
import Axios from 'axios';

let getAllEmployees = () => {
    return async (dispatch) => {
        try{
            dispatch({
                type: GET_EMPLOYEES_REQUEST
            });
            let response = await Axios.get('http://127.0.0.1:8000/api/employees');
            dispatch({
                type: GET_EMPLOYEES_SUCCESS,
                payload: response.data
            })
        }catch (err) {
            dispatch({
                type: GET_EMPLOYEES_FAILURE,
                payload: err.response
            })
        }
    }
}

let getAllemployee = (id) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: GET_EMPLOYEE_REQUEST
            });
            let response = await Axios.get(`http://127.0.0.1:8000/api/employees/${id}`);
            dispatch({
                type: GET_EMPLOYEE_SUCCESS,
                payload: response.data
            })
        }catch (err) {
            dispatch({
                type: GET_EMPLOYEE_FAILURE,
                payload: err.response
            })
        }
    }
}

export {getAllEmployees, getAllemployee}