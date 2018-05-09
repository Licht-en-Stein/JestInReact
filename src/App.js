import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {

  state = {
    products: [
    {id: 1, name: 'Product 1', brand: 'Brand A'},
    {id: 2, name: 'Product 2', brand: 'Brand B'},
    {id: 3, name: 'Product 3', brand: 'Brand C'}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <ProductList products={this.state.products}/>
        </div>
      </div>
    );
  }
}

export default App;
