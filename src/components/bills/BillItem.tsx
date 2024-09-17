import { Transaction } from "../../types";
import { formatCurrency, formatDate } from "../../util";

const BillItem: React.FC<Transaction> = ({avatar,name,category,date,amount}) => {
    return(
        <div className="flex rounded-lg shadow-lg bg-gray-100 border-2 border-gray-200">
            <img className="m-2 p-2" src={avatar} width="150" height="150"/>
            <div className="flex flex-col items-start justify-center mx-4">
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-xl">{category}</p>
                <p>{formatDate(date)}</p>
                <p className="font-bold">{formatCurrency(amount)}</p>
            </div>
        </div>
    );
}

export default BillItem;