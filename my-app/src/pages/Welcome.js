import centerImage from "../assets/welcomeCENTER.jpg";
const Welcome = () => {
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
      <div className="mb-10">
        <img src={centerImage} alt="centerImage" />
      </div>
    </section>
  );
};

export default Welcome;
