const React = require('react');
const {renderToString} = require('react-dom/server');

console.log(
  renderToString(
    React.createElement(
      'div',
      undefined,
      React.createElement('span', undefined, 'React SSR!')
    )
  )
);
