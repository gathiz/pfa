import { useState } from "react";
import { usePotStore } from "../../store/pot.store";
import PotForm from "./PotForm";
import PotItem from "./PotItem";
import EditForm from "./EditForm";
import { Pot } from "../../types";


const Pots = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editPot, setEditPot] = useState<Pot | undefined>(undefined);


    const potStore = usePotStore();
    let pots = potStore.pots;
    const items = [];
    const potsMap = new Map(pots.map(pot => [pot.name, pot]));
    for (let [_k, value] of potsMap) {
        items.push(value);
    }

    const handleClick = () => {
        setIsFormOpen(!isFormOpen);
    }

    const handleItemClick = (pot: Pot) => {
        setIsEditOpen(!isEditOpen);
        setEditPot(pot);
    }

    return (
        <div className="grow flex flex-col items-start min-h-screen bg-gray-100 m-4 p-4">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-4xl font-bold m-2 px-4">Pots</h1>
                <button onClick={handleClick} className="text-white flex items-center justify-between bg-gray-900 p-4 m-4 h-12">+Add New Pot</button>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full items-center justify-between">
                {items.map((item, index) => (
                    <PotItem
                        key={index}
                        name={item.name}
                        target={item.target}
                        total={item.total}
                        theme={item.theme}
                        onItemClick={handleItemClick} />
                ))}
            </div>
            <div className={`absolute ${!isFormOpen ? "hidden" : ""} top-1/2 left-1/2 w-1/3 lg:w-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-lg`}>
                <PotForm onSubmit={() => setIsFormOpen(false)} />
            </div>
            <div className={`absolute ${!isEditOpen ? "hidden" : ""} top-1/2 left-1/2 w-1/3 lg:w-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-lg`}>
                {editPot !== undefined ?
                    <EditForm onSubmit={() => setIsEditOpen(false)} pot={editPot!} />
                    : null
                }
            </div>
        </div>
    );
}

export default Pots;