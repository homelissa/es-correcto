import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProductIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserProducts();
  }

  render() {
    return (
      <div>
        {this.props.userProducts.map(userProduct =>
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
