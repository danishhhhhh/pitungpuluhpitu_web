import {
  CardBody,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Moh. Dani",
      data: [50, 40, 300, 320, 500, 450],
    },
    {
      name: "Dimas Galuh",
      data: [100, 10, 200, 610, 400, 260],
    },
    {
        name: "Tes",
        data: [100, 50, 300, 310, 200, 160],
      },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#242639", "#F8D902" ,"#D4D4D4"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function ChartComponent() {
  return (
    <CardBody className="px-2 pb-0">
      <Chart {...chartConfig} />
    </CardBody>
  );
}
