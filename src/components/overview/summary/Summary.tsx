import { useState } from "react";
import SummaryCard from "./SummaryCard"

interface SummaryItem {
    title: string;
    amount: number;
}

const Summary = () => {
    const [active, setActive] = useState(0);

    const items: SummaryItem[] = [
        { title: "Current Balance", amount: 4836 },
        { title: "Income", amount: 3814.25 },
        { title: "Expenses", amount: 1700.5 }
    ]

    const handleClick = (id: string) => {
        setActive(parseInt(id));
    }


    return (
        <div className="flex items-center justify-evenly rounded-lg px-2 mt-6 w-full h-1/8">
            {items.map((item, index) => (
                <SummaryCard key={index} id={index.toString()} title={item.title} amount={item.amount} active={active === index ? true : false} onClick={handleClick} />
            ))}
        </div>
    );
}

export default Summary;