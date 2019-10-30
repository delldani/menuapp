import { sum } from './src/MenuDraggable';
import MenuDraggable from './src/MenuDraggable';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
const menu1 = [
  { name: 'menu 1', parent: '', color: 'blue' },
  { name: 'menu 2', parent: '', color: 'red' },
  { name: 'menu 3', parent: 'menu 4', color: 'green' },
  { name: 'menu 4', parent: '', color: 'yellow' },
  { name: 'menu 5', parent: '', color: 'pink' },
];
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('enzyme test shallow rendering', () => {
  const wrapper = shallow(<MenuDraggable menuItems={menu1} />);
  expect(wrapper.contains('sasa')).toBe(true);
});
