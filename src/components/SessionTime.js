import React from 'react'

class SessionTime extends React.Component {
  constructor(props){
    super(props)
    this.minusSession = this.minusSession.bind(this)
    this.plusSession = this.plusSession.bind(this)
    this.start = this.start.bind(this)
  }
  minusSession(){
    this.props.minusSessionTime()
  }
  plusSession(){
    this.props.plusSessionTime()
  }
  start(){
    this.props.startfunc()
  }
  render() {
    return (
      <div>
        <h2>Session Time</h2>
        <span>
          <button onClick={this.minusSession} className="btn btn-primary">-</button>
          <h1>{this.props.session}</h1>
          <button onClick={this.plusSession} className="btn btn-primary">+</button>
        </span>
        <br />
        <button id="start" onClick={this.start} className="btn btn-primary">Start</button>
      </div>
    );
  }
}

module.exports = SessionTime
