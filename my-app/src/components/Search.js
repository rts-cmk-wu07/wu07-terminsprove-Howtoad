import { useState, useEffect } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
const Search = ({ setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const classesResponse = await fetch(
          "http://localhost:4000/api/v1/classes"
        );
        const classes = await classesResponse.json();
        console.log(classes);

        const trainerResponse = await fetch(
          "http://localhost:4000/api/v1/trainers"
        );
        const trainers = await trainerResponse.json();
        console.log(trainers);

        const allResults = [...classes, ...trainers];

        const filteredResults = allResults.filter((result) =>
          result.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(filteredResults);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSearch();
  }, [searchQuery, setSearchResults]);

  return (
    <div className="mt-4">
      <h1 className="text-[50px]">Search</h1>
      <div className="relative mt-4">
        <input
          placeholder="Search classes"
          className="outline-none w-full h-14 rounded-lg bg-slight-grey pl-10"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <div className="absolute left-2 top-4">
          <HiMagnifyingGlass size={24} />
        </div>
      </div>
    </div>
  );
};

export default Search;
