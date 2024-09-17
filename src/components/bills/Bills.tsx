import { useTransactionStore } from "../../store/transaction.store";
import BillItem from "./BillItem";

const Bills = () => {
    const transactionStore = useTransactionStore();
    let transactions = transactionStore.transactions;
    const bills = transactions.filter((transaction) => transaction.recurring);

    return(
        <div className="grow flex flex-col items-start min-h-screen bg-gray-100 m-4 p-4">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-4xl font-bold m-2 px-4">Recurring Bills</h1>
            </div>
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-between">
                {bills.map((bill) => (
                    <BillItem 
                    avatar={`/avatars/${bill.avatar}`} 
                    name={bill.name} 
                    category={bill.category} 
                    date={bill.date} 
                    amount={bill.amount} 
                    recurring={bill.recurring}/>
                ))}
            </div>

        </div>
    );
}

export default Bills;
