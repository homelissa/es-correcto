import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProductIndex extends React.Component {
  componentDidMount(){
    this.props.fetchAllProducts();
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
            {product.plans.map(plan =>
              <ul>
                <li>{plan.cost}</li>
                <li>{plan.paymentFrequency}</li>
                <li>{plan.contractLength}</li>
              </ul>
            )}
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default ProductIndex;