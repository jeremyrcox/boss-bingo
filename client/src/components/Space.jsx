import React from 'react';


export function Space(props) {
  const isCovered = !!(props.score & (1 << props.space));

  return (
    <li onClick={() => props.toggleSpace(props.space)} className={isCovered ? 'covered' : ''}>
      <div>{props.word}</div>
    </li>
  );
}

Space.propTypes = {
  space: React.PropTypes.number.isRequired,
  toggleSpace: React.PropTypes.func.isRequired,
  word: React.PropTypes.string.isRequired,
};
