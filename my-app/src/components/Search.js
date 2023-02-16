import { HiMagnifyingGlass } from "react-icons/hi2";
const Search = () => {
  return (
    <div className="mt-4">
      <h1 className="text-[50px]">Search</h1>
      <div className="relative mt-4">
        <input
          placeholder="Search classes"
          className="outline-none w-full h-14 rounded-lg bg-slight-grey pl-10"
          type="text"
        ></input>
        <div className="absolute left-2 top-4">
          <HiMagnifyingGlass size={24} />
        </div>
      </div>
    </div>
  );
};

export default Search;
