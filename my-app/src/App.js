import React,{Component} from "react";


class App extends Component{
  state ={
    Name:" Ayub",
    Age: " 30",
    Prof:" IT"    
  }
  AgeInceraserge() {
    //this.Age++;
    //alert("Button Clicked!");
   }  

  render(){
    

    return (
    <div>
      <p>My Name is: {this.state.Name}</p>
      <p>My age is:{this.state.Age}</p>
      <p>My Profession is:{this.state.Prof}</p>
      <button onClick="AgeInceraser()">Click</button>
      </div>
    );
}
}

export default App;
