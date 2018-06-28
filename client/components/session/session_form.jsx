import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentWillUnmount() {
    this.props.clearForm();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin(e) {
    e.preventDefault();
    let password = "password";
    const newdemo = () => {
      setTimeout(() => {
        if (password.length > 0) {
          this.setState({
            email: "jerry5@gmail.com",
            password: this.state.password.concat(password[0])
          });
          password = password.slice(1);
          newdemo();
        }
        else {
          this.props.login(this.state)
            .then(() => this.props.history.push('/'));
        }
      }, 150);

    };
    newdemo();

  }

  // handleDemoSubmit(e) {
  //   e.preventDefault();
  //   this.props.login({ username: "anseladams", password: "qwer0987" })
  // }

  renderErrors() {
    console.log(this.props)
    return(
    (this.props.errors.length !== 0 ? 
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors"key={`error-${i}`}>
              {error}
          </li>
        ))}
      </ul>
      : <div></div> )
    );
  }

  render() {
    const sharedFormSection = () => {
      return (
      <div className="login-form">
        <br/>
        <label>Email:
          <br/>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
          </label>
          <br/>
          <label>Password:
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
        </div>
      );
    };

    const otherSection = () => {
      return (
        <div>
        <label>First Name:
          <br/>
          <input type="text"
            value={this.state.firstName}
            onChange={this.update('firstName')}
            className="login-input"
          />
        </label>
        <br/>
        <label>Last Name:
          <br/>
          <input type="text"
            value={this.state.lastName}
            onChange={this.update('lastName')}
            className="login-input"
          />
        </label>
        <br/>
      </div>
      );
    };

    return (
      <div className="auth-wrapper">
      <div className="auth-form">
        <form className="login-form-box">
          <br/>
          Welcome to Es Correcto!
          <br/>
          Please {this.props.formType} or 

          {this.props.formType === 'Signup' ? <Link to="/login" className="auth-switch"> Login instead</Link> : <Link to="/signup" className="auth-switch"> Sign Up instead</Link> }
          {this.renderErrors()}
          
          {sharedFormSection()}
          { this.props.formType === 'Signup' ? otherSection() : <div></div> }
          <br/>
          <button onClick={this.handleSubmit} className="session-submit" type="submit">{this.props.formType}</button>
          <br/>
          <br/>
          <input className="demo-login"
            onClick={(e) => this.demoLogin(e)} type="submit" value="Demo" />
          <br />
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
