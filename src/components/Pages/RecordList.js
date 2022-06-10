import React from 'react';

const RecordList = ({sl,taskName,description}) => {
  return (
    <tr>
      <th>{sl}</th>
      <td>{taskName}</td>
      <td>{description}</td>
      <td></td>
    </tr>
  );
};

export default RecordList;
