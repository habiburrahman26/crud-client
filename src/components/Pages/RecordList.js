import { Link } from 'react-router-dom';

const RecordList = ({ id, sl, taskName, description, showModalHandler }) => {
  return (
    <tr>
      <th>{sl}</th>
      <td>{taskName}</td>
      <td>{description}</td>
      <td>
        <Link to={`/record/edit/${id}`} className="btn btn-xs btn-secondary mr-3">
          Edit
        </Link>
        <label
          htmlFor="delete-modal"
          className="btn btn-xs btn-error modal-button"
          onClick={() => showModalHandler(id)}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default RecordList;
