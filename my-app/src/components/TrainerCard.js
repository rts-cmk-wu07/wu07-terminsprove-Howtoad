import { useState, useEffect } from "react";
const TrainerCard = ({ trainerId }) => {
  const [trainerData, setTrainerData] = useState(null);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/v1/trainers/${trainerId}`
        );
        const data = await res.json();
        setTrainerData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrainer();
  }, [trainerId]);

  return (
    <div>
      {trainerData && (
        <div className="flex">
          <img
            src={trainerData.asset.url}
            alt="trainer"
            className="max-w-[80px] rounded-lg"
          ></img>
          <p className="ml-6 text-[22px] mt-2">{trainerData.trainerName}</p>
        </div>
      )}
    </div>
  );
};

export default TrainerCard;
