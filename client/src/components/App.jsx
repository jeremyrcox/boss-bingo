import React from 'react';

export function App(props) {
  return props.children;
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};
