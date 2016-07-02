import React from 'react';


export function Space(props) {
  const isCovered = !!(props.score & (1 << props.space));
  const isWin = !!(props.win & (1 << props.space));

  let cssClass = '';

  if (isCovered) {
    cssClass += 'covered';
  }

  if (isWin) {
    cssClass += ' win';
  }

  return (
    <li onClick={() => props.toggleSpace(props.space)} className={cssClass}>
      <div>{props.word}</div>
    </li>
  );
}

Space.propTypes = {
  space: React.PropTypes.number.isRequired,
  toggleSpace: React.PropTypes.func.isRequired,
  word: React.PropTypes.string.isRequired
};
