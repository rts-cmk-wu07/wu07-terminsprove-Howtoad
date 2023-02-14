import { useState, useEffect } from "react";

const BigClass = () => {
  const [classes, setClasses] = useState([]);
  const [randomPrintedClass, setRandomPrintedClass] = useState({});
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/v1/classes");
        const data = await res.json();
        setClasses(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchClasses();
  }, []);

  useEffect(() => {
    if (classes.length > 0) {
      const randomClass = classes[Math.floor(Math.random() * classes.length)];
      setRandomPrintedClass(randomClass);
    }
  }, [classes]);

  return (
    <div className="mx-4 mt-4">
      {randomPrintedClass.asset && (
        <div
          className="bg-cover h-96 rounded-2xl bg-center flex"
          style={{ backgroundImage: `url(${randomPrintedClass.asset.url})` }}
        >
          <h1 className="text-white text-[50px] ml-4 self-end h-fit mb-8">
            {randomPrintedClass.className}
          </h1>
        </div>
      )}
    </div>
  );
};

export default BigClass;
