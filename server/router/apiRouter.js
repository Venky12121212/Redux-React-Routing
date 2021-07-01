const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

//get all employees data
router.get('/employees', (request, response) => {
        fs.readFile(path.join(__dirname, '..', 'data', 'employees.json'), 'utf-8', (err, data) =>{
            let employees = JSON.parse(data);
            response.json(employees)
        })
});


/*get sinle employee data*/
router.get('/employees/:id', (request, response) => {
    debugger
    let employeeId = Number.parseInt(request.params.id)
    fs.readFile(path.join(__dirname, '..', 'data', 'employees.json'), 'utf-8', (err, data) => {
        let employees = JSON.parse(data);
        let selectedEmployee = employees.find((employee) => {
            return employee.id === employeeId;
        });
        response.json(selectedEmployee);
    })
})

//get all stocks data
router.get('/stocks', (request, response) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'stocksData.json'), 'utf-8', (err, data) =>{
        let stocks = JSON.parse(data);
        response.json(stocks)
    })
});


/*get sinle employee data*/
router.get('/stocks/:id', (request, response) => {
debugger
    let stocksId = Number.parseInt(request.params.id)
    fs.readFile(path.join(__dirname, '..', 'data', 'stocksData.json'), 'utf-8', (err, data) => {
        let stocks = JSON.parse(data);
        let selectedStock = stocks.find((stock) => {
            return stock.id === stocksId;
        });
        response.json(selectedStock);
    })
})


module.exports = router;