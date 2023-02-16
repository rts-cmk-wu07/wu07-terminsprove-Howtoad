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
        const classesA = await classesResponse.json();
        const classes = classesA.map((c) => {
          return { ...c, type: "class" };
        });

        const trainerResponse = await fetch(
          "http://localhost:4000/api/v1/trainers"
        );
        const trainersA = await trainerResponse.json();
        const trainers = trainersA.map((t) => {
          return { ...t, type: "trainer" };
        });

        const allResults = [...classes, ...trainers];

        const filteredResults = allResults.filter((result) => {
          if (!searchQuery) return false;
          if (result.className) {
            return result.className
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          } else if (result.trainerName) {
            return result.trainerName
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          }
          return false;
        });

        setSearchResults(filteredResults);
        console.log(filteredResults);
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
