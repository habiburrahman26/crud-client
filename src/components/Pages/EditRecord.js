import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { updateRecord } from '../store';

const EditRecord = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const records = useSelector((state) => state.record.records);
  const record = records.find((r) => r._id === id);

  const [taskName, setTaskName] = useState(record.taskName || '');
  const [description, setDescription] = useState(record.description || '');
  const taskNameChangeHandler = (e) => {
    setTaskName(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/record/${id}`, {
        taskName,
        description,
      })
      .then(({ data }) => {
        if (data.modifiedCount !== 0) {
          dispatch(updateRecord({ _id: id, taskName, description }));
          navigate('/', { replace: true });
        }
      });
  };

  return (
    <div className=" pt-20">
      <form onSubmit={submitHandler}>
        <h2 className="text-center text-2xl mb-6 ">Edit Record</h2>
        <div className="flex flex-col gap-3 items-center">
          <input
            type="text"
            placeholder="Task Name"
            className="input input-bordered w-full max-w-xs"
            name="taskName"
            required
            value={taskName}
            onChange={taskNameChangeHandler}
          />
          <textarea
            className="textarea textarea-bordered w-full max-w-xs"
            placeholder="Description"
            rows="3"
            name="description"
            required
            value={description}
            onChange={descriptionChangeHandler}
          ></textarea>
        </div>
        <div className="text-center mt-7 pb-4">
          <button type="submit" className="btn btn-outline w-full max-w-xs">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecord;
