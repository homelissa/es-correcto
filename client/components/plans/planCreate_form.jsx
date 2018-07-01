import React from 'react';
import { withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';



class CreatePlanForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    console.log(this.props);
    this.state = { cost: '',
      paymentFrequency: '',
      contractLength: '',
      enrollmentDate: '',
      productId: this.props.match.params.productId,
      userId: this.props.userId,
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
    // this.props.history.push
  }

  render() {
    console.log(this.props.match.params.productId)
    let date = new Date();
    let d = date.getDate() + 1;
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let formattedDate =  '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    return (
      this.state ?
        <div className="change-form-container">
          <h3>Create Plan</h3>
          <br />
          <form onSubmit={this.handleSubmit} className="change-form">
            <label>Cost(in $):
            <br />
              <input
                type="number"
                step="any"
                required value={this.state.cost}
                onChange={this.update('cost')}
                className="change-form-container-input" />
            </label>
            <br />
            <br />
              <label>Payment Frequency(in months):
              <br />
                <input
                  type="number"
                  min="1"
                  step="11"
                  max="12"
                  required value={this.state.paymentFrequency}
                  onChange={this.update('paymentFrequency')}
                  className="change-form-container-input" />
              </label>

            <br />
            <br />

            <label>Contract Length(in months):
            <br />
              <input
                type="number"
                min="12"
                step="12"
                max="120"
                required value={this.state.contractLength}
                onChange={this.update('contractLength')}
                className="change-form-container-input" />
            </label>
            <br />
            <br />

            <label>Enrollment Date (YYYY-MM-DD):
            <br />
              <input
                type="date"
                required value={this.state.enrollmentDate}
                min="2010-01-01"
                max={formattedDate}
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
