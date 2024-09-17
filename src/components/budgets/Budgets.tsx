import { useState } from "react";
import { useBudgetStore } from "../../store/budget.store";
import BudgetItem from "./BudgetItem";
import BudgetForm from "./BudgetForm";

const Budgets = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    const budgetStore = useBudgetStore();
    let budgets = budgetStore.budgets;
    const items = [];
    const budgetsMap = new Map(budgets.map(budget => [budget.category, budget]));
    for (let [_k, value] of budgetsMap) {
        items.push(value);
    }

    const handleClick = () => {
        setIsFormOpen(!isFormOpen);
    }

    return (
        <div className="grow flex flex-col items-start min-h-screen bg-gray-100 m-4 p-4">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-4xl font-bold m-2 px-4">Budgets</h1>
                <button onClick={handleClick} className="text-white flex items-center justify-between bg-gray-900 p-4 m-4 h-12">+Add New Budget</button>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full items-center justify-between">
                {items.map((item) => (
                    <BudgetItem category={item.category} maximum={item.maximum} theme={item.theme} />
                ))}
            </div>
            <div className={`absolute ${!isFormOpen ? "hidden" : ""} top-1/2 left-1/2 w-1/3 lg:w-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-lg`}>
                <BudgetForm onSubmit={() => setIsFormOpen(false)} />
            </div>
        </div>
    );
}

export default Budgets;