import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteRecord } from '../store';

const DeleteRecordModal = ({showModal}) => {
  const dispatch = useDispatch();

  const deleteTask = () => {
    axios.delete(`http://localhost:5000/record/${showModal}`).then(({ data }) => {
      dispatch(deleteRecord(showModal));
    });
  };

  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this record?
          </h3>
          <div className="modal-action">
            <label
              htmlFor="delete-modal"
              className="btn btn-sm btn-error"
              onClick={deleteTask}
            >
              Yes
            </label>
            <label htmlFor="delete-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteRecordModal;
