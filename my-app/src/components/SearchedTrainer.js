const SearchedTrainer = ({ trainerResult }) => {
  return (
    <div className="mb-4">
      <p>{trainerResult.trainerName}</p>
      {/* Render other relevant trainer information */}
    </div>
  );
};

export default SearchedTrainer;
