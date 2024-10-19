import React, { useEffect, useState } from "react";
import Sample from "~/newSample.json";

const SelectionTable = () => {
  const [data, setData] = useState([]);
  console.log(Sample.table_headers, "i table");

  useEffect(() => {
    if (Sample.table_headers) {
      let dataSet = [];
      Sample.table_headers.forEach((ele, index) => {
        if (index > 0) {
          dataSet.push(ele);
        }
      });
      setData(dataSet);
    }
  }, []);

  console.log(data, "data value");

  const options = ["int", "string", "float"];

  const handleDropdownChange = (id, column, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [column]: value } : item
      )
    );
    console.log(data);
  };

  return (
    <div className="table-container">
      <table border="1">
        <thead>
          <tr>
            {data?.length &&
              data.map((dataValue, index) => (
                <th key={dataValue.name}>{dataValue.name}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map((dataValue, index) => {
              const columnKey = `col${index + 1}`;
              return (
                <td key={dataValue.name} className="selection-row-background">
                  <select
                    className="select-element"
                    value={
                      dataValue.type === "object" ? "string" : dataValue.type
                    }
                    onChange={(e) =>
                      handleDropdownChange(
                        dataValue.name,
                        columnKey,
                        e.target.value === "object" ? "string" : e.target.value
                      )
                    }
                  >
                    <option value="">Select</option>
                    {options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
              );
            })}
          </tr>
          {Sample.table_data.map((dataValue) => (
            <tr>
              {dataValue.length &&
                dataValue.map((dataSet, index) => {
                  if (index > 0) {
                    return <td>{dataSet}</td>;
                  }
                  return "";
                })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectionTable;
