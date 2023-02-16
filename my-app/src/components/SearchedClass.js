const SearchedClass = ({ classResult }) => {
  console.log(classResult);
  return (
    <div className="mb-4">
      <p>{classResult.className}</p>
      {/* Render other relevant class information */}
    </div>
  );
};

export default SearchedClass;
