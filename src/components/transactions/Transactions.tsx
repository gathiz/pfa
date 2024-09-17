import { useState } from "react";
import { useTransactionStore } from "../../store/transaction.store";
import { formatDate } from "../../util";
import Search from "./Search.tsx";
import TransactionItem from "./TransactionItem.tsx";

const Transactions = () => {
    const transactionStore = useTransactionStore();
    let transactions = transactionStore.transactions;

    const [searchText,setSearchText] = useState("");

    const handleSearch = (search: string) => {
        setSearchText(search);
    }

    const filteredItems = transactions.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="grow flex flex-col items-start h-full m-4 p-4">
            <h1 className="text-4xl text-white font-bold m-2 px-4">Transactions</h1>
            <div className="w-full justify-between rounded-lg divide-y bg-white m-4 p-4">
                <div className="w-full items-center">
                    <Search onSearch={handleSearch} />
                </div>
                <div className="grid grid-cols-4 my-2 w-full items-center">
                    <p className="text-xl font-bold">Recipient/Sender</p>
                    <p className="text-xl font-bold">Category</p>
                    <p className="text-xl font-bold">Date</p>
                    <div className="flex justify-end">
                        <p className="text-xl font-bold mr-8">Amount</p>
                    </div>
                </div>
                {filteredItems.map((transaction, index) => (
                    <TransactionItem
                        key={index}
                        icon={"/avatars/${transaction.avatar}"}
                        name={transaction.name}
                        date={formatDate(transaction.date)}
                        amount={transaction.amount}
                        category={transaction.category}
                    />
                ))}
            </div>
        </div>
    );
}

export default Transactions;