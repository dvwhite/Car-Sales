import React from 'react';

const AddedFeature = props => {
  const handleClick = event => {
    event.preventDefault();
    props.removeFeature(props.feature);
  }

  return (
    <li>
      <button className="button" onClick={handleClick}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
