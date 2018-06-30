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
  // userProduct is an object
  productReport(plan){
    let date = new Date(plan.enrollmentDate);
    let d = 3;
    let formatedDate = this.format(date);
    let temp = new Date();
    let yearcalculator = new Date();
    let monthStarted = date.getMonth() + 1;
    let yearStarted = date.getFullYear();
    let y = temp.getFullYear();
    let m = temp.getMonth()+ 1;
    if (temp.getDate() > d){
      m += 1;
    }
    let M = m+1;

    let currentDate = '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    let nextDate = '' + y + '-' + (M<=9 ? '0' + M : M) + '-' + (d <= 9 ? '0' + d : d);
    let monthsPaid = -1;
    if (date.getDate() < 3) {
      monthsPaid += 1;
    }
    while (yearcalculator.getTime() > date.getTime()){
      yearcalculator = new Date(yearcalculator.getFullYear(),yearcalculator.getMonth() - 1, yearcalculator.getDate());

      monthsPaid += 1;
      console.log(this.format(yearcalculator));
    }

    // calculating edge cases when a person starts subscription in the middle of the month
    // let actualPaid;
    // let countofdays;
    // if (date.getDate() > 3) {
    //   countofdays = (30 - date.getDate()) + 3;
    //   actualPaid = ((plan.cost * countofdays) / 30);
    // }

     let amountPaidThisYear = Math.max(0,monthsPaid%12 * plan.cost);


    return(
        <tr>
          <td>{plan.name}</td>
          <td>{plan.cost}</td>
          <td>{formatedDate}</td>
          <td>{currentDate}</td>
          <td>{nextDate}</td>
          <td>{amountPaidThisYear}</td>
        </tr>
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
                      Cost: {plan.cost}
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
      let plans = productWithPlans.map(userProduct => {
        let plan = userProduct.plans;
        plan.map(object => {
          object.name = userProduct.name;
          return object;
        });
        return plan;
      });
      plans = plans.filter(plan => plan.length > 0);
      plans = plans.reduce((acc, currentValue) => acc.concat(currentValue), []);
      console.log(plans);
      return(
        <div>
          <table>
          <tr>
            <th>Product</th>
            <th>Cost</th>
            <th>Enrollment Date</th>
            <th>Current Payment Date</th>
            <th>Next Payment Date</th>
            <th>Amount paid this year</th>
          </tr>
          {plans.map(plan => {
            return this.productReport(plan);
          })
          }
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
