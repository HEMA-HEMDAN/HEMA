const TitleHeader = ({ title, sub, headingId }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div>
        <h2
          id={headingId}
          className="font-semibold md:text-5xl text-3xl text-center"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TitleHeader;
