/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserMTurkID } from '../actions';
// import RhythmWrapper from './RhythmWrapper';
import LessonWrapper from './LessonWrapper';
// import Start from './Start';

const App = (props) => {
  // const token = localStorage.getItem('token');

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ''; // Legacy method for cross browser support
    }
    return ''; // Legacy method for cross browser support
  };

  const id = window.location.pathname;
  console.log('found the id: ', id);
  const idWithoutSlash = id.slice(1);
  console.log('id without slash: ', idWithoutSlash);
  const idToken = localStorage.getItem('mturk');
  setUserMTurkID(idWithoutSlash);
  if (idToken && props.user.username === null) {
    console.log(localStorage);
  } else {
    props.setUserMTurkID(idWithoutSlash);
  }
  return (
    <Router>
      <Switch>
        <Route path="/" component={LessonWrapper} />
      </Switch>
    </Router>
  );
};

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
  };
}

export default connect(mapStateToProps, { setUserMTurkID })(App);
