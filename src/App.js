import React from 'react'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Widget from './Widget'
import Login from './Login'
import { useStateValue } from './Context'



function App() {

  //const user = null;
  const [{user}, send] = useStateValue();

  return (
    <div className="App">
      {!user ? (<Login/>):(
        <>
          <Nav />
          <Home />
          <Widget />
        </>
      )}
    </div>
  );
}

export default App;
