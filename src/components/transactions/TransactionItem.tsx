import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../util";

interface TransactionItemProps {
    icon: string;
    name: string;
    date: string;
    amount: number;
    category: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ icon, name, date, amount, category }) => {

    const [amoutColor, setAmountColor] = useState("");

    useEffect(() => {
        if (amount < 0) {
            setAmountColor("text-medium-red")
        } else {
            setAmountColor("text-dark-green");
        }
    }, [amount]);
    return (
        <div className="grid grid-cols-4 mt-2 w-full items-center">
            <div className="flex items-center justify-start">
                <img className="rounded-full my-4" src={icon} width="32" height="32" />
                <p className="text-black text-lg font-bold mx-2">{name}</p>
            </div>
            <p className="text-base mt-2">{category}</p>
            <p className="text-base mt-2">{date}</p>
            <div className="flex items-center justify-end">
                <p className={`text-base font-bold mr-8 ${amoutColor}`}>{formatCurrency(amount)}</p>
            </div>
        </div>
    );
}

export default TransactionItem;