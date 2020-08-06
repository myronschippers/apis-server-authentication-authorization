import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component{
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ANNUAL_REVIEWS' });
  }

  render() {
    const {
      props
    } = this;

    return (
      <div>
        <h1 id="welcome">
          Welcome, { props.store.user.username }!
        </h1>
        <p>Your ID is: {props.store.user.id}</p>

        <h2>Annual Reviews</h2>
        <ul>
          {this.props.store.annualReviews.map((item, index) => {
            return (
              <li key={index}>
                <h4>{item.username}</h4>
                <p>{item.comments}</p>
                <div><strong>Rating:</strong> {item.rating}</div>
              </li>
            );
          })}
        </ul>
        <LogOutButton className="log-in" />
      </div>
    );
  }
};

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
