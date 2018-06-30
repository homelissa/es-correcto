import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProductIndex extends React.Component {
  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    return (
      <div className="prodidxouter">
        <ul>



        {this.props.products.map(product =>
          <li className = "prodidxouterli">
            <Link to={`add-plan/${product._id}`}>
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

                      <img className = "prodidximg" src={`${product.img_url}`} alt="Italian Trulli" />
                    </ul>
                  </li>
                  )}
                </ul>
              </div>
            </div>
          </Link>
        </li>
        )}
      </ul>



      </div>
    );
  }
}

export default ProductIndex;
