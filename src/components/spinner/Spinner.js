import React, {Fragment} from 'react'
import Spin from '../../images/loader.gif'
import '../spinner/Spinner.css';

let Spinner = () => {
    return (
        <Fragment>
            <div className='spinnerClass'>
                <img src={Spin} alt="" className='spin-img'/>
            </div>
        </Fragment>
    )
};
export default Spinner