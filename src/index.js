import React from 'react'
import ReactDOM from 'react-dom'
import Pomodoro from './components/Pomodoro'
import style from './style.css'

class App extends React.Component{
  render(){
    return(
      <div  className="tray" style={style}>
       <Pomodoro/>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'))
