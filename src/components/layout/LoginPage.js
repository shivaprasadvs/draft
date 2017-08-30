import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import {store} from '../../index.js';
import {facebookLogin, googleLogin} from '../../actions/loginAction';
import GoogleLogin from 'react-google-login';

class LoginPage extends Component {

  responseFacebook = (response) => {
    store.dispatch(facebookLogin(response));
    console.log(response);
    this
      .props
      .history
      .push("/")
  }

  responseGoogle = (response) => {
    console.log(response);
    store.dispatch(googleLogin(response));
    
    this
      .props
      .history
      .push("/")
  }
  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <center><FacebookLogin
          appId="2006368566259410"
          autoLoad={true}
          fields="first_name,last_name,email,picture"
          scope="public_profile"
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
    icon="fa-facebook"/></center>
    
        <br/>
        <br/>
        <br/>
        <center><GoogleLogin
          clientId="543941603283-rhtr2chf2l5inqfn2ip16cr8ohh543gf.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}/></center>
      </div>
    )
  };
}

export default LoginPage;