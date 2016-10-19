import React from 'react';

export function Heading(props) {
  const title = props.title || 'Boss Bingo';

  return (
    <h1 className="heading">
      {title}
    </h1>
  );
}

Heading.propTypes = {
  title: React.PropTypes.string
};
