import { useEffect, useState } from "react";
import { formatCurrency } from "../../../util";

interface TransactionItemProps {
    icon: string;
    name: string;
    date: string;
    amount: number;
}

const TransactionItem: React.FC<TransactionItemProps> = ({icon,name,date,amount}) => {
    const [amoutColor, setAmountColor] = useState("");

    useEffect(() => {
        if(amount < 0){
            setAmountColor("text-medium-red")
        } else {
            setAmountColor("text-dark-green");
        }
    });

    return(
        <div className="flex mt-2 w-full items-center justify-between z-10">
            <div className="flex items-center justify-start">
                <img className="rounded-full m-2 p-2" src={icon} width="60" height="60"/>
                <p className="text-black text-lg font-bold">{name}</p>
            </div>
            <div className="flex flex-col items-end mx-4">
                <p className={`text-base font-bold ${amoutColor}`}>{formatCurrency(amount)}</p>
                <p className="text-base mt-2">{date}</p>
            </div>
        </div>
    );
}

export default TransactionItem;