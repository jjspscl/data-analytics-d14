'use client';

import { national_estimates } from '../../../../data/national-estimate';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const NationalEstimateBarGraph = () => {
    const data = {
        labels: national_estimates.map((item) => item.label),
        datasets: [
        {
            label: 'Raw Value',
            data: national_estimates.map((item) => item.raw_value),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: 'Percentage',
            data: national_estimates.map((item) => item.percentage),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
        ],
    };
    
    const options = {
        scales: {
        y: {
            beginAtZero: true,
        },
        },
    };
    
    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>National Estimates</h1>
            <Bar data={data} options={options} />
        </div>
    );
};

export default NationalEstimateBarGraph;