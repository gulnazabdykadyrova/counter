
import React from "react";
import Button from "./Components/Button";
import './App.css'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      counter:0
    }
  }

  increase=()=>{
    console.log("click")
    this.setState({counter:this.state.counter+1})
  }
  reset=()=>{
    this.setState({counter:0})
  }

  decrease=()=>{
    this.setState({counter:this.state.counter-1})
  }


render(){
  const {counter}=this.state;
  return(
    <div className="container">
      <h1 className={counter < 0 ? "negative": counter > 0 ?"positive":null}>{this.state.counter}</h1>
      <div className= "buttons">
      <Button func={this.increase} btnName="Increase" />
      <Button func={this.reset} btnName="Reset" />
      <Button func={this.decrease} btnName="Decrease" />
      </div>
    </div>
  )
}
}
export default App;

