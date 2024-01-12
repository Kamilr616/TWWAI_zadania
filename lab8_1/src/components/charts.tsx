import React, {useEffect, useState} from 'react';
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

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

function generateChartData(data) {
    const labels = data.map(entry => new Date(entry.date).toLocaleTimeString());
    const pressureData = data.map(entry => parseFloat(entry.pressure));
    const temperatureData = data.map(entry => parseFloat(entry.temperature));
    const humidityData = data.map(entry => parseFloat(entry.humidity));

    return {
        labels,
        datasets: [
            {
                label: 'Pressure',
                data: pressureData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Temperature',
                data: temperatureData,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Humidity',
                data: humidityData,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
    };
}



function Charts() {

    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3100/api/data');
                const result = await response.json();

                console.log(result)

                const formattedChartData = generateChartData(result);

                setChartData(formattedChartData);
                setLoading(false);

                console.log(chartData)
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{padding: 20}}>
            <h2>Komponent Charts</h2>
            {chartData && !loading ? <Line options={options} data={chartData} /> : <span>brak danych</span>}

        </div>
    );
}

export default Charts;

