import MobileNav from "../components/MobileNav";
import Search from "../components/Search";
import SmallClass from "../components/SmallClass";
import TrainerCard from "../components/TrainerCard";
import { useState } from "react";

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
              return <SmallClass key={index} class={result.name} />;
            } else if (result.type === "trainer") {
              return <TrainerCard key={index} trainer={result.name} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
