import MobileNav from "../components/MobileNav";
import Search from "../components/Search";
import SmallClass from "../components/SmallClass";
import TrainerCard from "../components/TrainerCard";
import { useState } from "react";
import SearchedClass from "../components/SearchedClass";
import SearchedTrainer from "../components/SearchedTrainer";
import ReactLoading from "react-loading";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="mx-6">
      <MobileNav></MobileNav>
      <Search
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
      ></Search>
      {isLoading ? (
        <div className="text-center mt-5">
          <ReactLoading type="spin" color="#000000" />
          <p>Loading search results...</p>
        </div>
      ) : searchResults === null ? (
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
      ) : searchResults.length === 0 ? (
        <div className="mt-5">
          <h1 className="text-[28px]">No results found</h1>
        </div>
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
