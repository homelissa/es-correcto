import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProductIndex extends React.Component {
  componentDidMount(){
    this.props.fetchAllProducts();
  }

render(){
  return (
    <div>
      this.props.products.map(product =>
        product.name
        product.plans.map(plan =>
        plan.cost;
        plan.paymentFrequency;
        plan.contractLength;
        )
      )
    </div>
  );
}

}
