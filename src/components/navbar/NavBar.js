import React, {Fragment} from 'react'
import {Link} from "react-router-dom";

let NavBar = () => {
    return(
        <Fragment>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <Link to='/' className='navbar-brand'>React with Routing</Link>

                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/employees' className='nav-link'>Employees</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/stocks' className='nav-link'>Stocks</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar