import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './ApiHome';
import About from './ApiAbout';
import Album from './components/ApiAlbum';
import Navigation from './components/ApiNavigation';

function App() {
  return(
    <HashRouter>
      <Navigation/>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/album" component={Album}/>
        <Route path="/about" component={About}/>
      
    </HashRouter>
  )
}






// import Users from './Users copy'

// function App() {
//   return (
//     <Users/>
//   );
// }

export default App;
