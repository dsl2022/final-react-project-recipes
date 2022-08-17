import { createContext } from "react";

const setSearch = () => {};
const SearchContext = createContext({ search: "", setSearch });
export default SearchContext;
