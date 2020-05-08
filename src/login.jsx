import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {login} from './services/users';
import Input from "./input";
class Login extends Component {
  state = {
    user: {
      username:"",
    
      password: "",
     
     // reEnterPassword: ""
    }
    // errors: {}
  };
  handleChange = e => {
    console.log(e.target.value);
    let Newuser = { ...this.state.user };
    Newuser[e.target.name]=e.target.value;
    // Newuser[e.target.email] = e.target.value;
    // Newuser[e.target.password] = e.target.value;
    //console.log( "new user"+Newuser);
    //user[e.target.reEnterPassword] = e.target.value;
    this.setState({ user:Newuser });
  //  this.setState({ [e.target.name]: e.target.value });
    // this.validateProperty(e.target);
    console.log(this.state.user);
  };
  handleSave = async (e) => {

  
    ///e.preventDefault();
    console.log(this.state.user);
    // const { email, password, reEnterPassword } = this.state.user;
  
    const data = await login(this.state.user).catch((err) =>
    console.log(err));
    console.log(data);
  
  //console.log(`your acount ${data.username},${data.password},${data.token}`)
    //clone
   // const users = [...this.props.users];
    //users.push(data);
    // this.setState({ products });
    this.props.history.push("/productlist");
  };
  //   schema = {
  //     name: Joi.string()
  //       .alphanum()
  //       .min(3)
  //       .max(30)
  //       .required()
  //       .label("Name")
  //   };
  //   // username = React.createRef();//ref
  handleSubmit = e => {
    // console.log(this.username.current.value);
    e.preventDefault();
    //validate
    // const errors = this.validate();
    // //error
    // if (errors) {
    //   return;
    // } else {
    // }
    //no error
    //call backend server
    console.log("register");
  };

  //   validate() {
  //     const res = Joi.validate(this.state.account, this.schema, {
  //       abortEarly: false
  //     });
  //     const errors = {};
  //     //no error
  //     if (res.error === null) return;
  //     //exrtract error information from joi result
  //     for (const item of res.error.details) {
  //       errors[item.path] = item.message;
  //     }
  //     this.setState({ errors });
  //     console.log(this.state.errors);
  //     return errors;
  //   }
  render() {
    console.log(this.state.user);
    return (
      <div className="container">
        <form className="login" onSubmit={e => this.handleSubmit(e)}>
          <h4 className="login__header">login to Account</h4>
          <div className="form-group">
            {/* <label for="">E-mail Address</label> */}
            <Input
              label="UserName"
              name="username"
              value={this.state.user.username}
              onChange={e => this.handleChange(e)}
              //   error={this.state.errors.email}
            />
          </div>
        
          <div className="form-row">
            <div className="form-group">
              {/* <label for="">Password</label> */}
              <Input
                label="Password"
                name="password"
                value={this.state.user.password}
                onChange={e => this.handleChange(e)}
                //   error={this.state.errors.email}
              />
            </div>
            {/* <div className="form-group"> */}
              {/* <label for="">Re-enter Password</label> */}
              {/* <Input
                label="Re-enter Password"
                name="reEnterPassword"
                value={this.state.user.reEnterPassword}
                onChange={e => this.handleChange(e)}
                //   error={this.state.errors.email}
              /> */}
            {/* </div> */}
          </div>

          <div className="login__remember-me">
            <div className="add-product__actions">
              <button href="#" className="btn btn--gray">
                Cancel
              </button>
              <button href="#" className="btn btn--primary">
                <Link onClick={this.handleSave} to="/productlist">
                  login
                </Link>
              </button>
              
            </div>
          </div>
         
        </form>
      </div>
    );
  }
}

export default Login;