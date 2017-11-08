import React from 'react'
import SessionTime from './SessionTime'
import BreakTime from './BreakTime'

class Pomodoro extends React.Component {
  constructor(props){
    super(props)
    this.state={
      Session:60,
      Break:60
    }
    this.minusTheSessionTime = this.minusTheSessionTime.bind(this)
    this.plusTheSessionTime = this.plusTheSessionTime.bind(this)
    this.plusTheBreakTime =this.plusTheBreakTime.bind(this)
    this.minusTheBreakTime= this.minusTheBreakTime.bind(this)
    this.startSession = this.startSession.bind(this)
  }
  minusTheSessionTime(){
    let ses= this.state.Session
     ses =ses- 1
    this.setState({
      Session:ses
    })
  }

  plusTheSessionTime(){
   let mes = this.state.Session
    mes +=1
    this.setState({
      Session:mes
    })
  }
  plusTheBreakTime(){
    let mes = this.state.Break
    mes +=1
    this.setState({
      Break:mes
    })
  }
  minusTheBreakTime(){
     let ses= this.state.Break
     ses =ses- 1
    this.setState({
      Break:ses
    })
  }
  startSession(){
    let set = setInterval(()=>{
       let sess= this.state.Session
       if(sess!==0){ sess = sess-1
        this.setState({
      Session:sess
    })}else{
          clearInterval(set)
        }

     },1000)
   let get = setInterval(()=>{
     let gess = this.state.Break
     if(this.state.Session===0){
       if(gess!==0){gess = gess-1
       this.setState({
         Break:gess
       })}else{
         clearInterval(get)
       }

     }
   },1000)
  }
  render() {
    return (
      <div>
        <h1>Pomodoro Seconds Clock</h1>
        <p>Please Note that this Clock Will Show the time in Seconds for more Modularity</p>
        <SessionTime session={this.state.Session} minusSessionTime={this.minusTheSessionTime} plusSessionTime={this.plusTheSessionTime} startfunc={this.startSession}/>
        <BreakTime break={this.state.Break} minusBreakTime={this.minusTheBreakTime} plusBreakTime={this.plusTheBreakTime}/>
      </div>
    );
  }
}

module.exports = Pomodoro
