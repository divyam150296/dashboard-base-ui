import { useState } from "react";
import Sample from "~/newSample.json";

const RightPart = () => {
  //initially added Id for Brick Data "b15f6a85-4228-4f30-9418-c412e1b86757" so it will stay open at starting
  const [sectionsOpened, setSectionsOpened] = useState([
    "b15f6a85-4228-4f30-9418-c412e1b86757",
  ]);

  const addTheElement = (id) => {
    setSectionsOpened((prev) => [...prev, id]);
  };

  const removeTheElementId = (id) => {
    setSectionsOpened((prev) => prev.filter((ele) => ele !== id));
  };

  return (
    <div>
      <div className="right-section-header border-curve table-section">
        Workflow
      </div>
      <div className="table-section">
        {Sample?.workflow_steps?.length > 0 &&
          Sample.workflow_steps.map((step) => {
            const isOpened = sectionsOpened.includes(step.id);

            return (
              <div className="show-details-grid" key={step.id}>
                <div
                  className="operator cursor-pointer"
                  onClick={() =>
                    isOpened
                      ? removeTheElementId(step.id)
                      : addTheElement(step.id)
                  }
                >
                  {isOpened ? "-" : "+"}
                </div>
                <div className="detailed-section">
                  <div
                    className={`detailed-section--title ${
                      isOpened && "highlighted border-curve"
                    }`}
                  >
                    {step.name_title}
                  </div>
                  {isOpened && (
                    <div className="pointed-section">
                      {Object.entries(step.params_extra).map(([key, value]) => (
                        <div key={key}>
                          <strong>{key}:</strong>{" "}
                          {typeof value === "object"
                            ? JSON.stringify(value)
                            : value}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RightPart;
