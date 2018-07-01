import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProductIndex extends React.Component {
  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    let presetProducts = this.props.products.reverse();
    return (
      <div className="prodidxouter">
        <Link to="/addproducts" className="add-product">+ Add Product</Link>

        <div className="product-index-container">
          {presetProducts.map(product =>
            <div className = "prodidxouterli">
              <Link to={`userproducts/${product._id}/plans/new`} className="products-link">
                {product.name}
              </Link>
              <Link to={`userproducts/${product._id}/plans/new`} className="products-link">
                <img className = "prodidximg" src={product.img_url} alt="Italian Trulli" />
              </Link>
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default ProductIndex;
