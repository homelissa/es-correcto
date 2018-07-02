import React from 'react';

class HomePage extends React.Component {

render() {
  return (
    <div>
    <h4>{this.props.currentUser.firstName} {this.props.currentUser.lastName}, are you having a hard time keeping track of your subscriptions?</h4>
    <p>Es Correcto helps you manage all your subscriptions under one umbrella</p>
    <p> Start Saving!</p>
    <p> We provide you with monthly reports based on your subscription plans and your period costs</p>
    <p> We also send you email remainders informing you when a payment is due.</p>
    <img src="https://res.cloudinary.com/archhere/image/upload/v1530491167/U_Pack2_v2._CB499173699_.gif"/>
    </div>

  );

}

}

export default HomePage;
