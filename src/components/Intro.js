/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { sendVideo, setUserHash } from '../actions';
import IntroText from './IntroText';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clef: 'treble',
      error: false,
      allowed: true,
      stream: '',
      infinityTextPage: 0,
    };
  }

  updateClef = (clef) => {
    this.setState({ clef });
  }

  componentDidMount = () => {
    const successCallback = (stream) => {
      // user allowed access to camera
      this.setState({ allowed: true, stream });
    };
    const errorCallback = (error) => {
      if (error.name === 'NotAllowedError') {
        // user denied access to camera
        this.setState({ allowed: false });
      }
    };
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then(successCallback, errorCallback);
  }

  componentWillUnmount = () => {
    if (this.state.stream !== '') {
      const { stream } = this.state;
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }

  resizeWindow = () => {
    window.resizeTo(1440, 900);
  }

  begin = () => {
    this.resizeWindow();
    window.scrollTo(0, 0);
    this.props.setUserHash(this.props.correctness.id);
    this.props.begin('rhythm', this.state.clef);
    this.props.startOverallTimer();
  }

  changeInfinityText = (amount) => {
    if (amount + this.state.infinityTextPage < 0 || amount + this.state.infinityTextPage > 14) {
      console.log('invalid page');
      return;
    }
    console.log(amount + this.state.infinityTextPage);
    this.setState((prevState) => {
      return { infinityTextPage: prevState.infinityTextPage + amount };
    });
  }

  renderError = () => {
    if (this.state.error) {
      return (
        <div style={{ color: 'red' }}>You must select one or more activity types</div>
      );
    } else {
      return (
        <div />
      );
    }
  }

  render() {
    const isChrome = !!window.chrome;
    return (
      <div className="infinity">
        <div className="infinity-body">
          <div className="infinity-title infinity-title-top">Learning Drum Notation</div>
          <div className="rt-intro-text-holder-list">
            <div className="rt-intro-text">MTurk ID: {this.props.correctness.id}</div>
            <div className="rt-intro-text-instructions">Instructions:</div>
            <div className="infinity-text-component-flex">
              <FontAwesomeIcon className="arrow-button fa-lg" icon={faArrowCircleLeft} onClick={() => { this.changeInfinityText(-1); }} />
              <IntroText page={this.state.infinityTextPage} />
              <FontAwesomeIcon className="arrow-button fa-lg" icon={faArrowCircleRight} onClick={() => { this.changeInfinityText(1); }} />
            </div>
            <br />
            <br />
            <br />
            {!this.state.allowed ? <div className="rt-big-text">Please enable your camera and microphone</div> : <div />}
            {isChrome ? <div className="rt-big-text">Once you have read all of the instructions, press the &quot;Play&quot; button at the bottom of the page to begin.</div> : (
              <li className="rt-big-text">To do this activity, you need to use the Google Chrome browser. Please copy the url above and repaste it into a Google Chrome window.
              </li>
            )}

          </div>
          {isChrome && this.state.allowed && this.props.correctness.id !== ''
            ? (
              <div className="inf-play-holder" onClick={this.begin}>
                <div className="inf-play green">
                  Play
                </div>
              </div>
            )
            : (
              <div>MTurk ID not found, or you are not using google chrome.
                Please use Google Chrome, and please edit the url to have your MTurk id after the &quot;.sh&quot;, for instance, https://jsanz-thesis-surge.sh/mturkidnumbers
              </div>
            )}

          {this.renderError()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  if (window.location.pathname.split('/')[1] === 'createlesson') {
    return {
      lesson: reduxState.lessonMaking,
    };
  } else {
    return {
      user: reduxState.user,
      lesson: reduxState.lesson.currentLesson,
      lessonMaking: reduxState.lessonMaking,
      correctness: reduxState.correctness,
    };
  }
}

export default withRouter(connect(mapStateToProps, { sendVideo, setUserHash })(Intro));
