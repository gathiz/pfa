import { useEffect } from "react";
import PotsCard from "./pots/PotsCard";
import TransactionsCard from "./transactions/TransactionsCard";
import { useTransactionStore } from "../../store/transaction.store";
import { useBudgetStore } from "../../store/budget.store";
import { usePotStore } from "../../store/pot.store";
import BillsCard from "./bills/BillsCard";
import BudgetsCard from "./budgets/BudgetsCard";

const Content = () => {

    useEffect(() => {
        fetch("/data.json")
            .then(response => response.json())
            .then(data => process(data));
    }, []);

    const transactionStore = useTransactionStore();
    const budgetStore = useBudgetStore();
    const potStore = usePotStore();


    const process = (data: any) => {
        transactionStore.addTransactions(data.transactions);
        budgetStore.addBudgets(data.budgets);
        potStore.addPots(data.pots);
    }

    return (
        <div className="flex w-full min-h-screen items-center justify-start px-2 mt-2">
            <div className="flex flex-col items-start justify-start w-1/2 mx-2 mt-8 h-full">
                <PotsCard />
                <TransactionsCard/>
            </div>
            <div className="flex flex-col items-start justify-start w-1/2 mx-2 mt-8 h-full">
                <BudgetsCard/>
                <BillsCard/>
            </div>
        </div>
    );
}

export default Content;