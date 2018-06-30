import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserProductIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserProducts();
    this.props.requestAllPlans();
    console.log("component did mount");
  }

  format(input) {
    let date = new Date(input);
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
  }

  productReport(userProduct){
    let product;
    if(userProduct.plans === []){
      return "";
    } else {
      product = userProduct;
    }
    return(
      <div>
      {product.plans.map(plan =>
        <tr>
          <td>
            {product.name}
          </td>
          <td>
            {plan.cost}
          </td>
          <td>
            {this.format(plan.enrollmentDate)}
          </td>
          <td>
            {plan.paymentFrequency}
          </td>
          <td>
          {plan.contractLength}
          </td>
        </tr>
      )}
    </div>

    );

  }

  render() {
    let products = this.props.products;
    console.log("products",products);
    var productWithPlans;
    if (products){
      productWithPlans = products.map((product)=> {
        let plans;
        product.plans = this.props.userPlans.filter(
          plan => plan.productId === product._id);
        return product;
      });
      // return productWithPlans;
    }
    console.log("productwithplans",productWithPlans);

    // if (!productWithPlans) {
    //   return (
    //     <div> loading</div>
    //   );
    // }
    if(this.props.type === "userProductIndex"){

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
                      <div>
                      Cost: {plan.cost}
                        <Link to={`/userproducts/${userProduct._id}/plans/${plan._id}`}>Edit Plan</Link> | <button onClick={() => this.props.removePlan(plan._id)}>Delete Plan</button>
                      </div>
                    </li>
                    <li>
                      Payment Frequency: {plan.paymentFrequency}
                    </li>
                    <li>
                      Contract Length: {plan.contractLength}
                    </li>
                    <li>
                      Enrollment Date: {plan.enrollmentDate}
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      );
    } else if (this.props.type === "userReport") {
      return(
        <div>
          <table>
          <tr>
            <th>Product</th>
            <th>Cost</th>
            <th>Enrollment Date</th>
            <th>Current Payment Date</th>
            <th>Next Payment Date</th>
          </tr>
          {productWithPlans.map(userProduct =>
            this.productReport(userProduct)
          )}
        </table>

        </div>
      );
    }
  }


}


export default UserProductIndex;



// <tr>
//
//   <td>{userProduct.name}</td>
//
//   {userProduct.plans.map(plan =>
//     <div>
//       <td>
//         {plan.cost}
//       </td>
//       <td>
//         {plan.enrollmentDate}
//       </td>
//       <td>
//         {plan.paymentFrequency}
//       </td>
//       <td>
//         {plan.contractLength}
//       </td>
//     </div>
//   )}
// </tr>
