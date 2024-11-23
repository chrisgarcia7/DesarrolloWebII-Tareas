'use client'
import { getPromedioCategoria } from '@/service/Api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



export default function PromedioCategoria() {

    const [chartData, setChartData] = useState({
        labels:[],
        datasets:[
            {
                label:'',
                data:[],
                backgroundColor:[] as string[]
            }
        ]
      })

    useEffect(()=>{
        getPromedioCategoria().then( data =>{
            const promedio = data.map((item: any) => item.Promedio);
            const categoria = data.map((item: any) => item.categoryCode);
            console.log(promedio);


            setChartData({
                labels: categoria,
                datasets:[{
                    label: 'Valor promedio de productos por categoria',
                    data:promedio,
                    backgroundColor:['rgb(255, 99, 132)','rgb(254, 93, 132)']
                }
                ]
            })



        })
        .catch((error)=>{console.log('ocurrio un error',error)})

        

    },[]);

  return (
    <>
    <div>
    {
            chartData ? (
                <div>
                    <h3>Titulo del componente</h3>

                    <Bar data={chartData}></Bar>
                </div>
            ) :(
                <div> loading..</div>
            )
        }
    </div>
    
    </>
    
  )
}
