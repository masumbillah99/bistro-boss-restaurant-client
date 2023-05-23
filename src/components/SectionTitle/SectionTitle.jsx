const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-12">
      <p className="text-xl text-orange-400">{subHeading}</p>
      <hr className="h-1 w-1/3 mx-auto bg-gray-300 my-5" />
      <h1 className="text-4xl uppercase">{heading}</h1>
      <hr className="h-1 w-1/3 mx-auto bg-gray-300 my-5" />
    </div>
  );
};

export default SectionTitle;
