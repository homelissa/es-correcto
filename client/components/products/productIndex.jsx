import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProductIndex extends React.Component {
  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    return (
      <div>
        {this.props.products.map(product =>
          <div>
            <h4>
              {product.name}
            </h4>
          <div>
            <ul id="index-list">
              {product.plans.map(plan =>
                <li id="index-item">
                <ul>
                  <li>
                    Cost: {plan.cost}
                  </li>
                  <li>
                    Payment Frequency: {plan.paymentFrequency}
                  </li>
                  <li>
                    Contract Length: {plan.contractLength}
                  </li>

                  <img src={`${product.img_url}`} alt="Italian Trulli" /> 
                </ul>
              </li>
              )}
            </ul>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default ProductIndex;
