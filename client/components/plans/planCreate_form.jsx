import React from 'react';
import { withRouter } from 'react-router-dom';

class CreatePlanForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props)
    this.state = { cost: '',
      paymentFrequency: '',
      contractLength: '',
      enrollmentDate: '',
      productId: this.props.match.params.productId
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.action(this.state).then((action) => this.props.history.push(`/userproducts`));
  }

  handleCancel(e){
    e.preventDefault();

  }

  render() {
    console.log(this.props.match.params.productId)
    return (
      this.state ?
        <div className="change-form-container">
          <h3>Create Plan</h3>
          <br />
          <form onSubmit={this.handleSubmit} className="change-form">
            <label>Cost:
            <br />
              <input
                type="text"
                value={this.state.cost}
                onChange={this.update('cost')}
                className="change-form-container-input" />
            </label>
            <br />
            <br />

            <label>Payment Frequency:
            <br />
              <input
                type="text"
                value={this.state.paymentFrequency}
                onChange={this.update('paymentFrequency')}
                className="change-form-container-input" />
            </label>
            <br />
            <br />

            <label>Contract Length:
            <br />
              <input
                type="text"
                value={this.state.contractLength}
                onChange={this.update('contractLength')}
                className="change-form-container-input" />
            </label>
            <br />
            <br />

            <label>Enrollment Date (YYYY-MM-DD):
            <br />
              <input
                type="text"
                value={this.state.enrollmentDate}
                onChange={this.update('enrollmentDate')}
                className="change-form-container-date"
                placeholder="YYYY-MM-DD"/>
            </label>
            <br />
            <br />
            <button onClick={this.handleCancel}>Cancel</button>
            <input type="submit" value='Create Plan' className="change-form-submit" />
          </form>
        </div>
        : null
    );
  }
}

export default withRouter(CreatePlanForm);
