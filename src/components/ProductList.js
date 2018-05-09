import React from 'react';
import PropTypes from 'prop-types';

const ProductList = props => {
  return (
    <div>
      <ul>
        {props.products.map(product => <li key={product.id}><p>{product.name}</p><p className='brand'>{product.brand}</p></li>)}
        {/*props.products.map(product => {
          return(<li key={product.id} className='brand'>{product.name}</li>)
        })*/}
      </ul>
    </div>
    )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;