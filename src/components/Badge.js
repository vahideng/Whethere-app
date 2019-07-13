import React from 'react';

function Badge(props) {
  return (
    <>
      <span className='badge badge-light px-3 py-2'>
        <strong>{props.num}</strong>
        <br />
        <span className='text-muted'>{props.title}</span>
      </span>
    </>
  );
}

export default Badge;
