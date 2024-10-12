import React from "react";
import { Line } from "react-chartjs-2";

const ProgressChart = ({ workoutData }) => {
  const data = {
    labels: workoutData.map((workout) => workout.date.toDateString()),
    datasets: [
      {
        label: "Duration (mins)",
        data: workoutData.map((workout) => workout.duration),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Progress Chart</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Line data={data} />
      </div>
    </div>
  );
};

export default ProgressChart;
