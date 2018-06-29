import React from 'react';
import { withRouter } from 'react-router-dom';

class PlanForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.plan;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then((action) => this.props.history.push(`/plans/${action.plan._id}`));
  }

  render() {
    return (
      this.state ?
        <div className="change-form-container">
          <h3>{this.props.formType}</h3>
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

            <label>Enrollment Date:
            <br />
              <input
                type="text"
                value={this.state.enrollmentDate}
                onChange={this.update('enrollmentDate')}
                className="change-form-container-input" />
            </label>
            <br />
            <br />

            <input type="submit" value={this.props.formType} className="change-form-submit" />
          </form>
        </div>
        : null
    );
  }
}

export default withRouter(PlanForm);