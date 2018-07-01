import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProductIndex extends React.Component {
  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    let presetProducts = this.props.products;
    return (
      <div className="prodidxouter">
        <ul>



        {presetProducts.map(product =>
          <li className = "prodidxouterli">
            
            <Link to={`userproducts/${product._id}/plans/new`}>
              <div>
                <h4>
                  {product.name}
                </h4>
                <img className = "prodidximg" src={product.img_url} alt="Italian Trulli" />
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
