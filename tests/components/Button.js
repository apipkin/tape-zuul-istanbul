import test from 'tape';
import { shallow } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Button from '../../src/components/Button';

test('<Button />', (t) => {
  const button = shallow(<Button />);

  t.equal(button.find('button').length, 1);

  t.end();
});

//
// describe('<Button />', () => {
//   beforeEach(() => {
//     Button = require('../../src/components/Button').default;
//   });
//
//   it('testing...', () => {
//     expect(1 + 1).to.equal(2);
//     expect('baz').to.not.equal('bar');
//   });
//
//   it('should return a button element', () => {
//     const button = TestUtils.renderIntoDocument(
//       <Button />
//     );
//
//     const buttonNode = ReactDOM.findDOMNode(button);
//
//     expect(buttonNode.tagName).to.equal('BUTTON');
//   });
//
//   it('should return a button element', () => {
//     const button = TestUtils.renderIntoDocument(
//       <Button />
//     );
//     const buttonNode = ReactDOM.findDOMNode(button);
//
//     expect(buttonNode.tagName).to.equal('BUTTON');
//   });
//
//   it('should read click me', () => {
//     const button = TestUtils.renderIntoDocument(
//       <Button />
//     );
//     const buttonNode = ReactDOM.findDOMNode(button);
//
//     expect(buttonNode.textContent).to.equal('Click Me');
//   });
//
//   it('should change text with `text` prop', () => {
//     const button = TestUtils.renderIntoDocument(
//       <Button text="Push Me"/>
//     );
//
//     const buttonNode = ReactDOM.findDOMNode(button);
//
//     expect(buttonNode.textContent).to.equal('Push Me');
//   });
// });
