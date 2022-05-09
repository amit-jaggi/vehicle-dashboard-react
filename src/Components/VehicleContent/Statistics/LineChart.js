import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const LineChart = () => {
  return <Line 
            data={{
                labels : ['Text','Text','Text','Text','Text','Text','Text','Text','Text','Text', 'Text', 'Text'],
                datasets: [
                    {
                        display: false,
                        data: [20, 59, 67, 42, 15, 32, 56, 39, 7, 42, 83, 69],
                        borderColor: '#424242',
                        backgroundColor: '#424242',
                        borderWidth: 3,
                    },
                ],
            }} 
            height={220} 
            width={540}
            options={{
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        max: 100,
                        min: 0,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },            
            }}
        />;
}
