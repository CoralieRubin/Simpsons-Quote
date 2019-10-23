import React from 'react';

function DisplaySimpsons({ simpsons }) {
  return (
    <div className="DisplaySimpsons">
      <img src={simpsons.image} alt={simpsons.character} />
      <br />
      <span>Name: {simpsons.character} </span>
      <br />
      <quote>
        <strong>Quote: {simpsons.quote} </strong>
      </quote>
    </div>
  );
}

export default DisplaySimpsons;
