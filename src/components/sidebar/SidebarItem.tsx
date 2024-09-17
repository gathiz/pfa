import { Link } from "react-router-dom";

interface SidebarItemProps {
    id: string;
    icon: string;
    title: string;
    active: boolean;
    path: string;
    onClick: (id: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({id,icon, title, active, path, onClick}) => {

    const handleClick = () => {
        onClick(id);
    }

    return(
        <Link to={path} onClick={handleClick} id={id} className={`flex w-full items-start py-4 my-2 ${active ? " bg-white text-black ": " text-white"}`}>
            <img className="mx-4" src={icon}/>
            <p className="text-xl mx-2 px-2">{title}</p>
        </Link>
    )
}

export default SidebarItem;