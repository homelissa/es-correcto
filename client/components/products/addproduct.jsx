

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props);
    this.state = {
      name: '',
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.action(this.state).then((action) => this.props.history.push(`/products`))

  }

  handleCancel(e){
    e.preventDefault();

  }

  render() {

    return (
      this.state ?
        <div className="change-form-container">
          <h3>Create Product</h3>
          <br />
          <form onSubmit={this.handleSubmit} className="change-form">
            <label>Name:
            <br />
              <input
                type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="change-form-container-input" />
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

export default withRouter(AddProductForm);
