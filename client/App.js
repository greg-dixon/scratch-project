import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/login.jsx';
import SignUp from './components/signUp.jsx';
import Dashboard from './components/dashboard.jsx';
import * as actions from './actions/actions.js';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoggedIn: false,
    //   isSignedUp: true,
    // };
    // this.handleLogIn = this.handleLogIn.bind(this); // binding the functionality to the constructor
    // this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLogIn() {
    // let { isLoggedIn, isSignedUp } = this.state;
    // isSignedUp = true;
    // this.setState({ isLoggedIn: !isLoggedIn, isSignedUp }); // setState changes the steate- if isLogged is true, it's changing it to false. And if isSignedUp is true, it's keeping its value as true?
  }

  handleSignUp() {
    // const { isSignedUp } = this.state;
    // this.setState({ isSignedUp: !isSignedUp }); // changing the state to true or false depending on the current state
  }

  render() {
    console.log('state', this.state);
    console.log('props', this.props);
    // const { isLoggedIn, isSignedUp } = this.state;
    // if (isSignedUp && !isLoggedIn)
    return (
      <div>
        {/* setting both of these as props- so we can call the methods in the children, which changes the state of the parent */}
        <Login handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp} />
      </div>
    );
  }

  // if(isLoggedIn) {
  //   return (
  //     <div>
  //       <Dashboard handleLogIn={this.handleLogIn} />
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <SignUp handleLogIn={this.handleLogIn} />
  //   </div>
  // );
}

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  isLoggedIn: state.isLoggedIn,
  isModalOpen: state.isModalOpen,
  top3: state.top3,
  dropdownMenus: state.dropdownMenus,
  newArticleInput: state.newArticleInput,
});

const mapDispatchToProps = (dispatch) => ({
  loginUserAction: () => dispatch(actions.loginUserAction()),
  loggingInAction: () => dispatch(actions.loggingInAction()),
  enterNewArticleAction: () => dispatch(actions.enterNewArticleAction()),
  submitNewArticleAction: () => dispatch(actions.submitNewArticleAction()),
  populateMenus: () => dispatch(actions.populateMenus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
