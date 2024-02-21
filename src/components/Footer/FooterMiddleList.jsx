const FooterMiddleList = ({ title, ListData }) => {
  // Corrected prop name
  return (
    <div className="md:w-60 lg:w-full sm:w-80 mx-auto">
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {ListData.map((data, i) => (
          <li key={i} className="footerLink ">
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterMiddleList;
