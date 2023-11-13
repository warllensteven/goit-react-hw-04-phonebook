import React from 'react';

const Filter = ({ value,onChange }) => {
  return (
    <div>
      <label>Filter contacts: </label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
