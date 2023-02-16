import MobileNav from "../components/MobileNav";
import Search from "../components/Search";
import SmallClass from "../components/SmallClass";
import TrainerCard from "../components/TrainerCard";

const SearchPage = () => {
  return (
    <div className="mx-6">
      <MobileNav></MobileNav>
      <Search></Search>
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
    </div>
  );
};

export default SearchPage;
