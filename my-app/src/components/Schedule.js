const Schedule = ({ children, id }) => {
  return (
    <div className="flex w-full" key={id}>
      {children}
    </div>
  );
};

export default Schedule;
