import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export default function Result({ data }) {

  const mappedData = {
    Anger: data[0].anger.toFixed(2),
    Fear: data[0].fear.toFixed(2),
    Joy: data[0].joy.toFixed(2),
    Love: data[0].love.toFixed(2),
    Sadness: data[0].sadness.toFixed(2),
    Surprise: data[0].surprise.toFixed(2),
    PredictionValue: data[0].prediction,
    PredictionText: data[0].prediction_txt
  };

  const pieData = {
    labels: ['Anger', 'Fear', 'Joy', 'Love', 'Sadness', 'Surprise'],
    datasets: [
      {
        label: 'Emotion Distribution',
        data: [
          mappedData.Anger * 100,
          mappedData.Fear * 100,
          mappedData.Joy * 100,
          mappedData.Love * 100,
          mappedData.Sadness * 100,
          mappedData.Surprise * 100
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderWidth: 1,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          }
        }
      }
    }
  };

  return (
    <>
      {console.log(mappedData)}
      <div className="chart-container">
        <p>Detected emotion: {mappedData.PredictionText}</p>
        <div className="pie-chart">
          <Pie data={pieData} options={options} />
        </div>
      </div>
    </>
  );
}
