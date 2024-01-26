import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

interface Reading {
  temperature: number;
  pressure: number;
  humidity: number;
  date: string;
}

const ReadingChart: React.FC = () => {
  const [readings, setReadings] = useState<Reading[]>([]);

  useEffect(() => {
    fetch('http://localhost:3100/api/data')
      .then(response => response.json())
      .then(data => setReadings(data));
  }, []);

  const data = {
    labels: readings.map(reading => reading.date),
    datasets: [
      {
        label: 'Temperatura',
        data: readings.map(reading => reading.temperature),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Ciśnienie',
        data: readings.map(reading => reading.pressure),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Wilgotność',
        data: readings.map(reading => reading.humidity),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
};

export default ReadingChart;