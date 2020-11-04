import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
export const DonutChart = () => {
  const [data, setData] = useState({});
  const chart = () => {
    setData({
      // labels: ["", "", "", ""],
      datasets: [
        {
          label: "",
          data: [10, 15, 20, 25],
          // borderColor: "#2CD9C5",
          backgroundColor: ["#55D8FE", "#FF8373", "#FFDA83", "#A3A0FB"],
          borderWidth: 0,
          lineTension: 0,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};
