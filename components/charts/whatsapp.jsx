import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
export const WhatsappChart = () => {
  const [data, setData] = useState({});
  const chart = () => {
    setData({
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "Brasil",
          data: [10, 20, 15, 25, 5],
          borderColor: "#2CD9C5",
          backgroundColor: "#2CD9C533",
          borderWidth: 4,
          lineTension: 0,
          fill: true,
        },
        {
          label: "México",
          data: [20, 10, 5, 15, 25],
          borderColor: "#8C54FF",
          backgroundColor: "#8C54FF33",
          borderWidth: 4,
          lineTension: 0,
          fill: true,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <Line
      data={data}
      options={{
        title: {
          display: true,
          text: "Notificações",
          position: "left",
        },
        legend: {
          align: "center",
          position: "right",
        },
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};
