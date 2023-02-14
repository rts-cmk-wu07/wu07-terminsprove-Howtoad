import centerImage from "../assets/welcomeCENTER.jpg";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[url('./assets/welcomeBG.jpg')] w-screen h-screen bg-cover bg-no-repeat bg-center flex justify-end flex-col">
      <div className=" h-fit mb-10">
        <h1 className="text-white text-[62px] max-w-[420px] ml-14 leading-tight">
          Believe Yourself
        </h1>
        <div className="flex">
          <div className="w-14 self-center h-[2px] bg-white"></div>
          <p className="text-white text-[28px] ml-2">Train like a pro</p>
        </div>
      </div>
      <div className="mb-24 grid">
        <img
          src={centerImage}
          alt="centerImage"
          className="col-start-1 col-end-1 row-start-1 row-end-1"
        />
        <button
          className="buttonStyle ml-auto pl-10 pr-10 mr-[-10px] text-[28px] col-start-1 col-end-1 row-start-1 row-end-1 self-end mb-[-30px] z-10"
          onClick={() => navigate("/home")}
        >
          Start Training
        </button>
      </div>
    </section>
  );
};

export default Welcome;
