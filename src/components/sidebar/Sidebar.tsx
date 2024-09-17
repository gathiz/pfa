import { useEffect, useState } from "react";
import logo from "/logo-large.svg";
import SidebarItem from "./SidebarItem";

interface MenuItem {
    id: number;
    title: string;
    path: string;
    icon: string;
}

const Sidebar = () => {

    const [active, setActive] = useState(0);

    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        fetch("/menu.json")
            .then(response => response.json())
            .then(data => setMenuItems(data));
    }, []);

    const handleClick = (id: string) => {
        setActive(parseInt(id));
    }

    return (
        <div className="flex flex-col items-start py-4 w-64">
            <img src={logo} className="my-8 mx-4" />
            {menuItems.map((item, index) => (
                <SidebarItem id={index.toString()} key={index} icon={`/${item.icon}`} title={item.title} active={active === index ? true : false} path={item.path} onClick={handleClick} />
            ))}
        </div>
    );
}

export default Sidebar;