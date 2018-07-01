import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { PieChart } from 'react-easy-chart';

class UserProductIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserProducts();
    this.props.requestAllPlans();
    console.log("component did mount");

  }

  format(input) {
    let date = new Date(input);
    let d = date.getDate() + 1;
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

    let annualYear = temp.getFullYear();
    let annualMonth = date.getMonth() + 1;
    if ((date.getMonth() + 1) < (temp.getMonth() + 1)){
      annualYear = temp.getFullYear() + 1;
    }
    let annualDate = date.getDate();
    if((annualMonth === temp.getMonth() + 1) && annualDate <= temp.getDate()){
      annualYear = temp.getFullYear() + 1;
    }
    let nextYear = annualYear + 1;
    let annualPaydate = '' + annualYear + '-' + (annualMonth<=9 ? '0' + annualMonth : annualMonth) + '-' + (annualDate <= 9 ? '0' + annualDate : annualDate);
    let annualnextPaydate = '' + nextYear + '-' + (annualMonth<=9 ? '0' + annualMonth : annualMonth) + '-' + (annualDate <= 9 ? '0' + annualDate : annualDate);
    let currentDate;
    if(plan.paymentFrequency === 1){
      currentDate = '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    } else if(plan.paymentFrequency === 12){
      currentDate = annualPaydate;
    }
    let nextDate;
    if(plan.paymentFrequency === 1){
      nextDate = '' + y + '-' + (M<=9 ? '0' + M : M) + '-' + (d <= 9 ? '0' + d : d);
    } else if(plan.paymentFrequency === 12){
      nextDate = annualnextPaydate;
    }




    let monthsPaid = -1;
    if (date.getDate() < 3) {
      monthsPaid += 1;
    }
    while (yearcalculator.getTime() > date.getTime()){
      yearcalculator = new Date(yearcalculator.getFullYear(),yearcalculator.getMonth() - 1, yearcalculator.getDate());

      monthsPaid += 1;
    }

    // calculating edge cases when a person starts subscription in the middle of the month
    // let actualPaid;
    // let countofdays;
    // if (date.getDate() > 3) {
    //   countofdays = (30 - date.getDate()) + 3;
    //   actualPaid = ((plan.cost * countofdays) / 30);
    // }

     let amountPaidThisYear;
     if (plan.paymentFrequency === 1){
      amountPaidThisYear = Math.max(plan.cost,monthsPaid%13 * plan.cost);
    } else {
      amountPaidThisYear = plan.cost;
    }
    let frequency;
    if (plan.paymentFrequency === 1){
      frequency = "Monthly";
    } else if(plan.paymentFrequency === 12) {
      frequency = "Annual";
    }



     let resultObj = {};
     resultObj.render = (
       <tr>
         <td>{plan.name}</td>
         <td>$ {plan.cost}</td>
         <td>{frequency}</td>
         <td>{formatedDate}</td>
         <td>{currentDate}</td>
         <td>{nextDate}</td>
         <td>{amountPaidThisYear}</td>
       </tr>
     );
     resultObj.amountPaidThisYear = amountPaidThisYear;
     resultObj.name = plan.name;

     return(
         resultObj
     );


  }


  usersubscription(userProduct){
    let subscribedproducts;
    if (userProduct.plans.length > 0) subscribedproducts = userProduct;
    else return "";
    return(
      <div className="user-product-row">
        <div className="user-product-column product">
          <div className="user-product">
            <Link to={`userproducts/${userProduct._id}/plans/new`} className="user-product-link">
              {userProduct.name}
            </Link>
            <Link to={`userproducts/${userProduct._id}/plans/new`} className="user-product-link">
              <img className="prodidximg" src={userProduct.img_url} alt="Italian Trulli" />
            </Link>
          </div>
        </div>
        <div className="user-product-column plans">
          {userProduct.plans.map(plan =>
            <ul>
              <li>
                <div className="product-buttons">
                  <div>
                    Cost: <strong>{plan.cost}</strong>
                  </div>
                  <div>
                    <Link to={`/userproducts/${userProduct._id}/plans/${plan._id}`} className="user-product-edit">Edit Plan</Link> | <button onClick={() => this.props.removePlan(plan._id)} className="user-product-delete">Delete Plan</button>
                  </div>
                </div>
              </li>
              <li>
                Payment Frequency: <strong>{plan.paymentFrequency}</strong>
              </li>
              <li>
                Contract Length: <strong>{plan.contractLength}</strong>
              </li>
              <li>
                Enrollment Date: <strong>{this.format(new Date(plan.enrollmentDate))}</strong>
              </li>
            </ul>
          )}
        </div>
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
          <div className="user-product-head">
            <h3>Welcome, {this.props.currentUser.firstName} {this.props.currentUser.lastName}. Here are your subscription details.</h3>
            <Link to="/addproducts" className="add-product">+ Add Product</Link>
          </div>
        {productWithPlans.map(userProduct =>
            this.usersubscription(userProduct)
          )}
        </div>
      );
    } else if (this.props.type === "userReport") {
      console.log("productWithPlans",productWithPlans);
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

      let sum = {};
      let costs = plans.map(plan => {
        return this.productReport(plan);
      });
      costs.forEach(planObj=>{
        if(sum[planObj.name] === undefined){
          sum[planObj.name] = planObj.amountPaidThisYear;
        }else{
          sum[planObj.name] += planObj.amountPaidThisYear;
        }
      });

      let monthlyCost = 0;
      plans.forEach((plan)=>{
        let d = new Date(plan.enrollmentDate);
        let month = d.getMonth();
        let year = d.getFullYear();
        let current = new Date();
        let currentMonth = current.getMonth();
        let currentyear = current.getFullYear();
        if(plan.paymentFrequency === 1 ||
          (month === currentMonth && year !== currentyear))
        monthlyCost += plan.cost;
      });

      let sumArray = [];
      Object.keys(sum).forEach((productName) => {
        sumArray.push({ key: productName, value: sum[productName] });
      });

      return(
        <div className="reporttable">
          <table className="table">
          <tr>
            <th>Product</th>
            <th>Cost</th>
            <th>PaymentFrequency</th>
            <th>Enrollment Date</th>
            <th>Current Payment Date</th>
            <th>Next Payment Date</th>
            <th>Amount paid this year</th>
          </tr>
          {plans.map(plan => {
            return this.productReport(plan).render;
          })
          }
          <tfoot>
            <tr>
              <td>Monthly Expense</td>
              <td>$ {monthlyCost}</td>
            </tr>
          </tfoot>
        </table>
          <PieChart className="pie"
            data={sumArray}
          />
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
