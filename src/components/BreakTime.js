import React from 'react'


class BreakTime extends React.Component {
  constructor(props){
    super(props)
    this.minusBreak = this.minusBreak.bind(this)
    this.plusBreak = this.plusBreak.bind(this)
  }
  minusBreak(){
    this.props.minusBreakTime()
  }
  plusBreak(){
    this.props.plusBreakTime()
  }
  render() {
    return (
      <div>
        <h2>Break Time</h2>
        <blockquote>
          <button onClick={this.minusBreak} className="btn btn-primary">-</button>
          <h1>{this.props.break}</h1>
          <button onClick={this.plusBreak} className="btn btn-primary">+</button>
        </blockquote>
      </div>
    );
  }
}

module.exports = BreakTime
