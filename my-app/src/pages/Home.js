import BigClass from "../components/BigClass";
import MobileNav from "../components/MobileNav";
import SmallClass from "../components/SmallClass";

const Home = () => {
  return (
    <div className="mx-4">
      <MobileNav>
        <h1>Popular classes</h1>
      </MobileNav>
      <BigClass></BigClass>
      <h2 className="text-[28px] text-black">Classes for you</h2>
      <SmallClass></SmallClass>
    </div>
  );
};

export default Home;
