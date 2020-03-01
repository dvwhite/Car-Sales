import React from 'react';

const AdditionalFeature = props => {
  const handleClick = event => {
    // event.preventDefault();
    props.buyItem(props.feature);
  }

  return (
    <li>
      <button className="button" onClick={handleClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
