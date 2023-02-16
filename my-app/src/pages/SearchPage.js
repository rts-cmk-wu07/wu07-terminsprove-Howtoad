import MobileNav from "../components/MobileNav";
import Search from "../components/Search";
import SmallClass from "../components/SmallClass";
import TrainerCard from "../components/TrainerCard";
import { useState } from "react";
import SearchedClass from "../components/SearchedClass";
import SearchedTrainer from "../components/SearchedTrainer";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="mx-6">
      <MobileNav></MobileNav>
      <Search setSearchResults={setSearchResults}></Search>
      {searchResults.length === 0 ? (
        <>
          <div>
            <h1 className="text-[28px] mt-5">Popular Classes</h1>
            <SmallClass></SmallClass>
          </div>
          <div>
            <h1 className="text-[28px] mb-10">Popular Trainers</h1>
            <div className="mb-4">
              <TrainerCard trainerId={1}></TrainerCard>
            </div>
            <div className="mb-4">
              <TrainerCard trainerId={3}></TrainerCard>
            </div>
            <div className="mb-4 opacity-50">
              <TrainerCard trainerId={2}></TrainerCard>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-[28px] mt-5">Search Results</h1>
          {searchResults.map((result, index) => {
            if (result.type === "class") {
              return <SearchedClass key={index} classResult={result} />;
            } else if (result.type === "trainer") {
              return <SearchedTrainer key={index} trainerResult={result} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
