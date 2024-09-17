import { Pot } from "../../types";
import { formatCurrency } from "../../util";

interface PotItemProps {
    name: string;
    target: number;
    total:number;
    theme:string;
    onItemClick: (pot: Pot) => void;
}

const PotItem: React.FC<PotItemProps> = ({name,target,total,theme,onItemClick}) => {
    const percent = Math.round(total * 100 / target);

    const handleClick = () => {
        const pot: Pot = {name: name, target: target, total: total, theme: theme};
        onItemClick(pot);
    }
    return (
        <div onClick={handleClick} className="flex flex-col bg-white rounded-lg m-4 p-4">
            <p className="text-xl font-bold my-4">{name}</p>
            <div className="flex justify-between">
                <p>Total Saved</p>
                <p className="text-4xl font-bold">{formatCurrency(total)}</p>
            </div>
            <div>
                <div style={{ width: `${percent}%`, backgroundColor: `${theme}` }} className={`h-2.5 rounded-full`}></div>
            </div>
            <div className="flex justify-between">
                <p>{percent}%</p>
                <p>Target of {formatCurrency(target)}</p>
            </div>
        </div>
    );
}

export default PotItem;