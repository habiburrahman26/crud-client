import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecord } from '../store';
import AddRecord from './AddRecord';
import DeleteRecordModal from './DeleteRecordModal';
import RecordList from './RecordList';

const AllRecord = () => {
  const [showAddRecord, setShowAddRecord] = useState(false);
  const dispatch = useDispatch();
  const records = useSelector((state) => state.record.records);
  const [showModal, setShoeModal] = useState('');

  const showModalHandler = (id) => {
    setShoeModal(id);
  };

  useEffect(() => {
    dispatch(fetchRecord());
  }, [dispatch]);

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, i) => (
              <RecordList
                key={record._id}
                sl={i + 1}
                id={record._id}
                taskName={record.taskName}
                description={record.description}
                showModalHandler={showModalHandler}
              />
            ))}
          </tbody>
        </table>
      </div>

      {showAddRecord && <AddRecord setShowAddRecord={setShowAddRecord} />}
      {showModal && <DeleteRecordModal showModal={showModal}/>}
    </div>
  );
};

export default AllRecord;
