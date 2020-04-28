import React from 'react';
import './App.css';

class App extends React.Component{
  render() {
    return(
      <div className="App">
    
        <header>
        <h1> To Do </h1>
          <form id="todo-form">
           <input type="text" placeholder="Enter Text"/>
           <button type="submit">add</button> 
          </form>
        </header>
        </div>

 );
 }
}
    


export default App;
