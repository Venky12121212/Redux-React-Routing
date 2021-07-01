import './App.css';
import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./components/navbar/NavBar";
import StocksDetails from "./components/stocks/StocksDetails";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import EmployeeList from "./components/employees/EmployeeList";
import StocksList from "./components/stocks/StocksList";
import Home from "./components/home/Home";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import Spinner from "./components/spinner/Spinner";

function App() {
    return (
        <Fragment>
            <div className="App">
                <Router>
                    <NavBar/>
                    <Provider store={store}>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/employees' component={EmployeeList}/>
                            <Route exact path='/employees/:id' component={EmployeeDetails}/>
                            <Route exact path='/stocks' component={StocksList}/>
                            <Route exact path='/stocks/:id' component={StocksDetails}/>
                        </Switch>
                    </Provider>
                </Router>
            </div>
        </Fragment>
    );
}

export default App;
