import { formatCurrency } from "../../../util";

interface SummaryCardProps {
    id: string;
    title: string;
    amount: number;
    active: boolean;
    onClick: (id: string) => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({id, title, amount, active, onClick}) => {

    const handleClick = () => {
        onClick(id);
    }

    return(
        <div onClick={handleClick} id={id} className={`flex flex-col mx-4 rounded-xl p-4 w-1/3 h-full${active ? " bg-black text-white" : " bg-white"}`}>
            <p className="py-4">{title}</p>
            <h1 className="text-4xl font-bold">{formatCurrency(amount)}</h1>
        </div>
    );
}

export default SummaryCard;