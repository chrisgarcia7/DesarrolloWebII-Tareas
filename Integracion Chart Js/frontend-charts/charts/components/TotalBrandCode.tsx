'use client'
import { getValorTotalBrandCode } from '@/service/Api';
import React, { useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement,RadialLinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement,RadialLinearScale);

export default function TotalBrandCode() {

    const [chartData, setChartData] = useState({
        labels: [] as string[], // Array de etiquetas
        datasets: [
            {
                label:'',
                data: [] as any, // Datos del gráfico
                backgroundColor: [] as any, // Colores opcionales
            },
        ],
    });

    useEffect(() =>{
        getValorTotalBrandCode().then(data => {
            const brand = data.map ((item:any) => item.brandCode);
            const total = data.map ((item:any) => item.valortotal);

            setChartData({
                labels: brand,
                datasets: [
                    {
                        label: 'valor total de productos por brandCode',
                        data: total, // Ajustar valor total
                        backgroundColor: ['rgb(255, 99, 132)',
                            'rgb(75, 192, 192)',
                            'rgb(255, 205, 86)',],
                    },
                ],
            });
        })
    })
    return (
    <div>{
            
        chartData ? (
            <div style={{"height":'400px'}}>
                <PolarArea data={chartData} />
            </div>
        ) : (
            <p>Loading...</p>
        )
    }

    </div>
  )
}
