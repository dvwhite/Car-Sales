import React from "react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures
            .sort((item1, item2) =>
              Number(item1.id) < Number(item2.id) ? -1 : 1
            ) // Retain order if added and removed
            .map(item => (
              <AdditionalFeature
                key={item.id}
                feature={item}
                buyItem={props.buyItem}
              />
            ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
