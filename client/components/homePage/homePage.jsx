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
      <div className = "footer-top">
      <div className='footer'>
            <div id='footer-caption'>
              Made by Archana Kannan, Bryan Lin, Mellisa Ho and Andzu Schaefer
            </div>


        </div>
        </div>
    </div>

  );

}

}

export default HomePage;
