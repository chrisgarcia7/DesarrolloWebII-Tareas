'use client'
import { getProductoStatus } from '@/service/Api';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement);

export default function StatusProducto() {
    const [chartData, setChartData] = useState({
        labels: [] as string[], // Array de etiquetas
        datasets: [
            {
                data: [] as any, // Datos del gráfico
                backgroundColor: [] as any, // Colores opcionales
            },
        ],
    });

    useEffect(() =>{
        getProductoStatus().then(data =>{
            const status = data.map((item:any) => item.status);
            const productos = data.map ((item:any) => item.productosdisponibles)

            setChartData({
                labels: status,
                datasets: [
                    {
                        data: productos, // Ajustar valor total
                        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
                    },
                ],
            });
        })
    })
  return (
    <div>{
            
        chartData ? (
            <div style={{"height":'400px'}}>
                <Pie data={chartData} />
            </div>
        ) : (
            <p>Loading...</p>
        )
    }</div>
  )
}
