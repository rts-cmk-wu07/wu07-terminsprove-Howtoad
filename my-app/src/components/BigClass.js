import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const BigClass = () => {
  const [classes, setClasses] = useState([]);
  const [randomPrintedClass, setRandomPrintedClass] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/v1/classes");
        const data = await res.json();
        setClasses(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
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
    <Link to={`/classdetails/${randomPrintedClass.id}`}>
      {isLoading ? (
        <ReactLoading type={"bars"} color={"black"} height={50} width={50} />
      ) : (
        <div className="mt-4 drop-shadow-xl relative w-full flex">
          {randomPrintedClass.asset && (
            <>
              <img
                src={randomPrintedClass.asset.url}
                className="h-96 rounded-2xl object-cover"
                alt="cover"
              />
              <h1 className="text-white text-[50px] ml-4 absolute bottom-4">
                {randomPrintedClass.className}
              </h1>
            </>
          )}
        </div>
      )}
    </Link>
  );
};

export default BigClass;
