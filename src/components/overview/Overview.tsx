import Content from "./Content.tsx";
import Summary from "./summary/Summary.tsx";

const Overview = () => {
    return(
        <div className="grow flex flex-col items-start h-full bg-gray-100 p-4">
            <h1 className="text-4xl text-black font-bold m-2 px-4">Overview</h1>
            <Summary/>
            <Content/>
        </div>
    );
}

export default Overview;