import { Link } from "react-router-dom";
import { useTransactionStore } from "../../../store/transaction.store";
import { formatDate } from "../../../util";
import TransactionItem from "./TransactionItem";

const TransactionsCard = () => {

    const transactionStore = useTransactionStore();

    return (
        <div className="flex flex-col w-full rounded-lg bg-white mt-4 h-3/4 z-20">
            <div className="flex items-center justify-between">
                <p className="text-xl text-black font-bold m-4">Transactions</p>
                <Link to="/transactions" className="text-sm cursor-pointer text-black mr-6">View All</Link>
            </div>
            <div className="divide-y mx-4">
            {transactionStore.transactions.slice(0,12).map((transaction, index) => (
                <TransactionItem
                    key={index}
                    icon={`/avatars/${transaction.avatar}`}
                    name={transaction.name}
                    date={formatDate(transaction.date)}
                    amount={transaction.amount}
                />
            ))}
            </div>
        </div>
    );
}

export default TransactionsCard;