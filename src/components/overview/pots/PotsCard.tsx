import { Link } from "react-router-dom";
import { usePotStore } from "../../../store/pot.store";
import { formatCurrency } from "../../../util";
import { BASE_PATH } from "../../../constants";

const PotsCard = () => {

    const potsStore = usePotStore();
    const pots = potsStore.pots;

    const saving = pots.find((pot) => pot.name === "Savings");
    const concert = pots.find((pot) => pot.name === "Concert Ticket");
    const gift = pots.find((pot) => pot.name === "Gift");
    const laptop = pots.find((pot) => pot.name === "New Laptop");


    return (
        <div className="flex flex-col w-full rounded-lg bg-white my-2">
            <div className="flex items-center justify-between p-4">
                <p className="text-2xl text-black font-bold m-4">Pots</p>
                <Link to="/pots" className="text text-black m-4 cursor-pointer">See Details</Link>
            </div>
            <div className="flex w-full">
                <div className="flex items-center mx-4 my-4 bg-gray-100 w-1/2 rounded-lg">
                    <img className="mx-4" src={`${BASE_PATH}/icon-pot.svg`} width="20" height="20" />
                <div className="flex flex-col items-center justify-evenly mx-2 px-4 my-2">
                    <p className="text-sm">Total Saved</p>
                    <h1 className="text-2xl font-bold">{formatCurrency(850)}</h1>
                </div>
                </div>
                <div className="flex flex-col w-1/4 m-2">
                    <div className="flex flex-col border-l-4 border-l-green-500">
                        <p className="text-sm px-2">Savings</p>
                        <h3 className="text-base font-bold px-2">{saving? formatCurrency(saving.total) : ""}</h3>
                    </div>
                    <div className="flex flex-col my-2 border-l-4 border-l-blue-500">
                        <p className="text-sm px-2">Concert</p>
                        <h3 className="text-base font-bold px-2">{concert? formatCurrency(concert.total) : ""}</h3>
                    </div>
                </div>
                <div className="flex flex-col w-1/4 my-2">
                    <div className="flex flex-col border-l-4 border-l-pink-400">
                        <p className="text-sm px-2">Gift</p>
                        <h3 className="text-base font-bold px-2">{gift? formatCurrency(gift.total) : ""}</h3>
                    </div>
                    <div className="flex flex-col my-2 border-l-4 border-l-red-400">
                        <p className="text-sm px-2">New Laptop</p>
                        <h3 className="text-base font-bold px-2">{laptop? formatCurrency(laptop.total) : ""}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PotsCard;