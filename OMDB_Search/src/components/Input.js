import React from 'react';

import '../styles/Input.css';

const Input = ({ handleSearch }) => {
  return (
    <div className='input-wrapper'>
      <input
        className='search'
        placeholder='Search a movie like Hitman...'
        onChange={handleSearch}
      />
    </div>
  );
};

export default Input;