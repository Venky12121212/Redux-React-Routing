import {
    GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS, GET_EMPLOYEE_FAILURE,
    GET_EMPLOYEES_FAILURE,
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS
} from "./employeeActionTypes";

let initialState = {
    loading: false,
    employees: [],
    employee: {},
    errorMessage: null
}

let employeeReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case GET_EMPLOYEES_REQUEST:
        case GET_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: payload
            }
        case GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employees:[],
                employee: payload
            }
        case GET_EMPLOYEES_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload,
                employees: []
            }
        case GET_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload,
                employees: []
            }
        default : return state

    }
}

export {employeeReducer}