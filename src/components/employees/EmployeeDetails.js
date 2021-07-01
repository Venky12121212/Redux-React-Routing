import React, {Fragment, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getAllemployee, getAllEmployees} from "../../redux/employees/employeeActions";
import {Link} from "react-router-dom";

let EmployeeDetails = () => {
    let {id} = useParams();
    let dispatch = useDispatch();
    let employeeInfo = useSelector((state) => {
        return state.employee;
    });
    useEffect(() => {
        dispatch(getAllemployee(id));
    }, [id]);

    return (
        <Fragment>
            <pre>{JSON.stringify(employeeInfo)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {
                            //checking the object is empty or not
                            Object.keys(employeeInfo.employee).length > 0 ?
                                <Fragment>
                                    <div className="card">
                                        <div className="card-header bg-primary text-white">
                                            <h3>{employeeInfo.employee.first_name} {employeeInfo.employee.last_name}</h3>
                                        </div>
                                        <div className="card-body">
                                            <h2 className='display-3'>
                                                <span className='badge badge-primary mx-1'>{employeeInfo.employee.id}</span>
                                                <span className='badge badge-primary mx-1 text-right'>
                                                            <img src={employeeInfo.employee.avatar} alt='person Image'
                                                                 width='25' height="25"/>
                                                        </span>
                                            </h2>
                                            <ul className='list-group'>
                                                <li className='list-group-item-primary list-group-item'>
                                                    NAME : {employeeInfo.employee.first_name} {employeeInfo.employee.last_name}
                                                </li>
                                                <li className='list-group-item-primary list-group-item'>
                                                    EMAIL : {employeeInfo.employee.email}
                                                </li>
                                                <li className='list-group-item-primary list-group-item'>
                                                    GENDER : {employeeInfo.employee.gender}
                                                </li>
                                                <li className='list-group-item-primary list-group-item'>
                                                    IP-ADDRESS : {employeeInfo.employee.ip_address}
                                                </li>
                                            </ul>
                                            <Link className='btn-sm btn-success btn' to='/employees'> Back to Employees </Link>
                                        </div>
                                    </div>
                                </Fragment>
                                : null
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EmployeeDetails