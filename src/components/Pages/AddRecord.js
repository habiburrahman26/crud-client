import React from 'react';

const AddRecord = () => {
  return (
    <div>
      <input type="checkbox" id="add-record" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="add-record"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form>
            <h2 className="text-center text-2xl mb-6">Add Record</h2>
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered w-full max-w-xs"
            />
            <textarea
              class="textarea textarea-bordered"
              placeholder="Description"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecord;
