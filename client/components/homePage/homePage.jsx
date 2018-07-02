import React from 'react';

class HomePage extends React.Component {

render() {
  return (
    <div className="homepage">
    <div id="demo">
    <h4>{this.props.currentUser.firstName} {this.props.currentUser.lastName}, are you having a hard time keeping track of your subscriptions?</h4>
    <p>Es-Correcto helps you manage all your subscriptions under one umbrella.</p>
    <p> Start Saving!</p>
    <p> We provide you with monthly reports based on your subscription plans and related costs.</p>
    <p> We also send you email remainders informing you when a payment is due.</p>
    <p>Simply go to <strong>product</strong> page. If you see your product in the list, click on the product and add your subscription details.
    <p></p> If you are unable to view your product, click on <strong>"add product"</strong> button and add your custom product and your subscription details. </p>
    <p>We will track your subscription now!</p>
    </div>
    <img className="homepageimg" src = "https://res.cloudinary.com/archhere/image/upload/v1530512432/0124efaf-4861-4d81-a2a4-d97af99cf347._SR300_300_.jpg"/>
      <div className = "footer-top">
      <div className='footer'>
            <div id='footer-caption'>
              Made by Archana Kannan, Bryan Lin, Melissa Ho and Andzu Schaefer
              <a href="https://github.com/homelissa/es-correcto" id="linkedin" target="_blank">
              <img className = "gitimg" src="https://res.cloudinary.com/archhere/image/upload/v1530495612/ivory-github-512.png"/></a>
            </div>


        </div>
        </div>
    </div>

  );

}

}

export default HomePage;
