import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProductIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserProducts();
    this.props.requestAllPlans();
  }

  render() {
    let products = this.props.userProducts;

    let productWithPlans = products.map((product)=> {
      let plans = [];
      product.plans = this.props.userPlans.filter(
        plan => plan.productId === product._id);
    });
    return (
      <div>
        {productWithPlans.map(userProduct =>
          <div>
            <h4>
              {userProduct.name}
            </h4>
            <div>
              {userProduct.plans.map(plan =>
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
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserProductIndex;
