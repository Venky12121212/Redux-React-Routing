import React, {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllEmployees} from "../../redux/employees/employeeActions";
import Spinner from "../spinner/Spinner";
import {Link} from "react-router-dom";


let EmployeeList = () => {
    let dispatch = useDispatch();

    let employeesInfo = useSelector((state) => {
        return state.employee;
    });


    useEffect(() => {
        dispatch(getAllEmployees())
    }, []);
    return (
        <Fragment>
            <div className='container'>


                <h2> EmployeeList </h2>
                {/*<pre>{JSON.stringify(employeesInfo)}</pre>*/}
                {
                    employeesInfo.loader ? <Spinner/> :
                        <Fragment>
                            <table className='table table-primary table-sm text-center table-striped table-hover'>
                                <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Emp Id</th>
                                    <th>Avatar</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>IP Address</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    employeesInfo.employees.length > 0 ?
                                        <Fragment>
                                            {
                                                employeesInfo.employees.map(employee => {
                                                    return (
                                                        <tr>
                                                            <td>{employee.id}</td>
                                                            <td>
                                                                <img src={employee.avatar} width='70' height='70'
                                                                     alt='personImage'/>
                                                            </td>
                                                            <td>
                                                                <Link to={`/employees/${employee.id}`}>{employee.first_name}</Link>
                                                            </td>
                                                            <td>{employee.last_name}</td>
                                                            <td>{employee.email}</td>
                                                            <td>{employee.gender}</td>
                                                            <td>{employee.ip_address}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </Fragment> : null
                                }
                                </tbody>
                            </table>
                        </Fragment>
                }
            </div>
        </Fragment>
    )
}

export default EmployeeList