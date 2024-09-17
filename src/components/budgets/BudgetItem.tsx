import { Budget } from "../../types";
import { formatCurrency } from "../../util";

const BudgetItem: React.FC<Budget> = ({ category, maximum, theme }) => {
    
    return (
        <div style={{ backgroundColor: `${theme}` }} className="flex flex-col rounded-lg m-4 p-4">
            <p className="text-xl font-bold my-4">{category}</p>
            <div className="flex items-center justify-between">
                <p>Maximum</p>
                <p className="text-4xl font-bold">{formatCurrency(maximum)}</p>
            </div>
        </div>
    );
}

export default BudgetItem;