import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPage extends Component {
  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
  }

  render() {
    return (
      <div>
        <h1 id="welcome">
          Welcome, { this.props.user.username }!
        </h1>
        <p>Your ID is: {this.props.user.id}</p>
        <button onClick={this.logout} >
          Log Out
        </button>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

