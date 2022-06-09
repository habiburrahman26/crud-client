import React, { useState } from 'react';
import AddRecord from './AddRecord';

const AllRecord = () => {
  const [showAddRecord, setShowAddRecord] = useState(false);

  return (
    <div className="pt-10">
      <div className="text-center pb-4">
        <label
          htmlFor="add-record"
          className="btn modal-button btn-primary"
          onClick={() => setShowAddRecord(true)}
        >
          Add Record
        </label>
      </div>
      <div className="overflow-x-auto lg:max-w-2xl mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>

      {showAddRecord && <AddRecord setShowAddRecord={setShowAddRecord}/>}
    </div>
  );
};

export default AllRecord;
