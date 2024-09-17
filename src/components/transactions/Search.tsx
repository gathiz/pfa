import { useEffect, useState } from "react";

interface SearchProps {
    onSearch: (s: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState<string>(search);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    useEffect(() => {
        if (debouncedSearch) {
            onSearch(debouncedSearch);
        }
    }, [debouncedSearch]);

    return (
        <div className="w-1/4 my-2 pr-4">
            <input
                onChange={handleChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Search.."
                type="text"
                value={search} />
        </div>
    );
}

export default Search;