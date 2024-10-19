import { useState } from "react";
import TableSection from "~/component/TableSection.js";

const LeftPartTopHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <section className="flex-rw center">
        <div className="flex-rw">
          {["Data", "Summary", "Logs"].map((title, index) => (
            <button
              key={index}
              className={`active-btn cursor-pointer ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleButtonClick(index)}
            >
              {title}
            </button>
          ))}
        </div>
        <button className="active-btn">Download</button>
      </section>
      <TableSection />
    </div>
  );
};

export default LeftPartTopHeader;
