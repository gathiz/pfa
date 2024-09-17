import DoughnutChart from "./chart/DoughnutChart";

const BudgetsCard = () => {

    return (
        <div className="flex flex-col w-full rounded-lg bg-white">
            <div className="flex items-center justify-between">
                <p className="text-xl text-black font-bold m-4">Budgets</p>
                <p className="text-sm text-black m-4">See Details</p>
            </div>
            <div className="flex flex-col items-center justify-center m-4 p-4">
                <DoughnutChart />
            </div>
        </div>
    );
}

export default BudgetsCard;