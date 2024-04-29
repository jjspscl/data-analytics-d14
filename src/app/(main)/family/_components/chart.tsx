
'use client';
import { family_data } from '@/data/family';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = family_data.map((item) => item.region);
const data_set = {
    labels: labels,
    datasets: [
        {
            label: 'Number of Obese Cases',
            data: family_data.map((item) => item.number_of_obese_cases),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const FamilyChart = () => {
    return (
        <div className="bg-white p-51 mb-10 flex justify-center py-5 rounded-md shadow-md">
            <Pie data={data_set} className="max-h-svh"/>
        </div>
    );
}

export default FamilyChart;