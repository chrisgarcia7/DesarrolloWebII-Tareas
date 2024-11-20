const express = require('express')
const sequelize= require('./config/database')
const Empleado = require('./modelos/Empleado')
const Producto= require('./modelos/Producto')

const app= express();
app.use(express.json())
var port = 5000;

//SELECT SUM(SALARY),DEPARTMENT_ID FROM EMPLEADO group by DEPARTMENT_ID;

app.get('/suma-salario-departamento', async(req,resp) =>{

    try {
        
        const result = await Empleado.findAll({
            attributes:[
                'DEPARTMENT_ID',
                [sequelize.fn('SUM', sequelize.col('SALARY')), 'Salario Total']
            ],
            group: ["DEPARTMENT_ID"]
        });

        resp.json(result)

    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
    }

});


//select MAX(SALARY),DEPARTMENT_ID from empleado where DEPARTMENT_ID=50 group by DEPARTMENT_ID;

app.get('/maximo-salario-departamento/:idDeparment', async(req,resp) =>{

    const {idDeparment} = req.params;


    try {
        
        const result = await Empleado.findAll({
            attributes:[
                'DEPARTMENT_ID',
                [sequelize.fn('MAX', sequelize.col('SALARY')), 'Salario Total']
            ],
            where: {DEPARTMENT_ID:idDeparment },
            group: ["DEPARTMENT_ID"]
        });

        resp.json(result)

    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
    }

});


//select avg(value) promedio, categoryCode from producto group by categoryCode;

app.get('/promedio-productos-categoria', async(req,resp) =>{

    try {
        
        const result = await Producto.findAll({
            attributes:[
                'categoryCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'Promedio']
            ],
            group: ["categoryCode"]
        });

        resp.json(result)

    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
    }

});


//select sum(value) valortotal, brandCode from producto group by brandCode;

app.get('/valor-total-productos-cada-brandCode', async(req,resp) =>{

    try {
        
        const result = await Producto.findAll({
            attributes:[
                'brandCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'valortotal']
            ],
            group: ["brandCode"]
        });

        resp.json(result)

    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
    }

});


app.get('/valor-total-productos-cada-brandCode', async(req,resp) =>{

    try {
        
        const result = await Producto.findAll({
            attributes:[
                'brandCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'valortotal']
            ],
            group: ["brandCode"]
        });

        resp.json(result)

    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
    }

});

//select count(*) productosdisponibles, status from producto group by status;
app.get('/productos-disponibles-status', async(req,resp) =>{

    try {
        
        const result = await Producto.findAll({
            attributes:[
                'status',
                [sequelize.fn('COUNT', sequelize.col('*')), 'productosdisponibles']
            ],
            group: ["status"]
        });

        resp.json(result)

    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
    }

});


app.listen(port, ()=>{
    console.log('aplicacion ejecutando en puerto:' , port)
})