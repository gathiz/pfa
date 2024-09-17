import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useBudgetStore } from "../../../../store/budget.store";


ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = () => {
  const budgetStore = useBudgetStore();
  const budgets = budgetStore.budgets;
  const entertainment = budgets.find((budget) => budget.category === "Entertainment");
  const bills = budgets.find((budget) => budget.category === "Bills");
  const diningOut = budgets.find((budget) => budget.category === "Dining Out");
  const personalCare = budgets.find((budget) => budget.category === "Personal Care");


  let data = [
    {
      label: "Entertainment",
      value: entertainment?.maximum,
      color: "#277C78",
      cutout: "50%",
    },
    {
      label: "Bills",
      value: bills?.maximum,
      color: "#82C9D7",
      cutout: "50%",
    },
    {
      label: "Dining Out",
      value: diningOut?.maximum,
      color: "#F2CDAC",
      cutout: "50%",
    },
    {
      label: "Personal Care",
      value: personalCare?.maximum,
      color: "#626070",
      cutout: "50%",
    }
  ]

  const options: any = {
    plugins: {
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value!)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 2,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };
  return <Doughnut data={finalData} options={options} />;
}

export default DoughnutChart;