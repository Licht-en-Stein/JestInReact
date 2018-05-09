import React, { Component } from 'react';
import ProductList from './ProductList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('should render a list of products as an unordered list', () => {
  const mockProducts = [
  {id: 1, name: 'Mock Product 1', brand: 'MockBrand A'},
  {id: 2, name: 'Mock Product 2', brand: 'MockBrand B'},
  {id: 3, name: 'Mock Product 3', brand: 'MockBrand C'}
  ];

  const wrapper = Enzyme.shallow(<ProductList products={mockProducts}/>);
  expect(wrapper.find('li').length).toEqual(mockProducts.length);

});
it('should display the brand name in each `<li>` element', () => {
  const mockProducts = [
  {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
  {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
  {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'}
  ];

  const wrapper = Enzyme.shallow(<ProductList products={mockProducts}/>);
  expect(wrapper.find('p.brand').length).toEqual(mockProducts.length);
});


