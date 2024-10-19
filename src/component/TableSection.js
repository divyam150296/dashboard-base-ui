import { Fragment } from "react";
import SelectionTable from "~/component/SelectionTable.js";
import Sample from "~/newSample.json";

const TableSection = () => {
  const totalRowLength = Sample?.table_data?.length;
  const formatDateToDDMMYY = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}/${month}/${year}`;
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
      <div className="table-section">
        <SelectionTable />
      </div>
    </Fragment>
  );
};

export default TableSection;
