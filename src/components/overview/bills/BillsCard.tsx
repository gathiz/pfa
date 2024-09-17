import BillItem from "./BillItem";

const BillsCard = () => {
    return(
        <div className="flex flex-col h-1/3 w-full bg-white mt-2">
            <div className="flex items-center justify-between">
                <p className="text-xl text-black font-bold m-4">Recurring Bills</p>
                <p className="text-sm text-black mx-4">See Details</p>
            </div>
            <BillItem title={"Paid Bills"} amount={190.00}/>
            <BillItem title={"Total Upcoming"} amount={194.98}/>
            <BillItem title={"Due Soon"} amount={59.58}/>
        </div>
    );
}

export default BillsCard;