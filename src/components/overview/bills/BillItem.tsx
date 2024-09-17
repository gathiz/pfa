import { formatCurrency } from "../../../util";

interface BillItemProps {
    title: string;
    amount: number;
}

const BillItem: React.FC<BillItemProps> = ({ title, amount }) => {
    return (
        <div className="flex items-center justify-between rounded-lg bg-background mx-4 my-2 p-4">
            <p>{title}</p>
            <p>{formatCurrency(amount)}</p>
        </div>
    );
}

export default BillItem;