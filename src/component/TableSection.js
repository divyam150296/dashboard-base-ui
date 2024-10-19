import { Fragment } from "react";
import SelectionTable from "~/component/SelectionTable.js";
import Sample from "~/newSample.json";

const TableSection = () => {
  const totalRowLength = Sample?.table_data?.length;
  const formatDateToDDMMYY = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date); // Convert to Date object if it's a string or timestamp
    }

    const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with leading zero
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-based) and pad
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of year

    return `${day}/${month}/${year}`; // Format as ddmmyy
  };
  return (
    <Fragment>
      <div className="table-section border-curve mar-top-30 flex-rw center">
        <div className="flex-rw center">
          <div className="flex-rw center">
            <div className="uppercase-title">Project Name</div>
            <div className="mar-5 text-capilize">{Sample.project_name}</div>
          </div>
          <div className="flex-rw center">
            <div className="uppercase-title">Output Dataset Name</div>
            <div className="mar-5 text-capilize">{Sample.output_name}</div>
          </div>
          <div className="flex-rw center">
            <div className="uppercase-title">last run</div>
            <div className="mar-5">{formatDateToDDMMYY(Sample.last_run)}</div>
          </div>
        </div>
        <div>Rows: {totalRowLength}</div>
      </div>
      {/* <div className="table-section no-border-top">
        <table>
          <thead>
            <tr>
              <th>
                Column 1 <span>Dustbin</span>
              </th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
            <tr>
              <th>
                <select name="pets" id="pet-select">
                  <option value="">--Please choose an option--</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
                </select>
              </th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <div className="table-section">
        <SelectionTable />
      </div>
    </Fragment>
  );
};

export default TableSection;
