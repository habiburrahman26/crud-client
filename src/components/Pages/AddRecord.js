import React from 'react';

const AddRecord = ({ setShowAddRecord }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const taskName = e.target.taskName.value;
    const description = e.target.description.value;
    console.log(taskName, description);

    setShowAddRecord(false);
  };

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
          <form onSubmit={submitHandler}>
            <h2 className="text-center text-2xl mb-6">Add Record</h2>
            <div className="flex flex-col gap-3 items-center">
              <input
                type="text"
                placeholder="Task Name"
                class="input input-bordered w-full max-w-xs"
                name="taskName"
                required
              />
              <textarea
                class="textarea textarea-bordered w-full max-w-xs"
                placeholder="Description"
                rows="3"
                name="description"
                required
              ></textarea>
            </div>
            <div className="text-center mt-7 pb-4">
              <button type="submit" className="btn btn-outline w-full max-w-xs">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecord;
