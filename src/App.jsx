import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carousel from "./Carousel"
import Heading from "./Heading"
import Cards from "./Cards"
import Contactus from "./Contactus"
import Aboutus from "./Aboutus"
import Error from './Error';
import Home from "./Home"
import Navbar from './Navbar';
import Wp from "./Wp";
function App() {
  return (
<>
<Navbar/>
<Switch>
<Route exact path="/" component={Home}/>
  <Route exact path="/Contactus" component={Contactus}/>
  <Route exact path="/Aboutus" component={Aboutus} />
  <Route exact path="/Wp" component={Wp} />
  <Route component={Error}/>
</Switch>
<Heading/>
<Carousel/>
<Cards/>




</>
  );
}

export default App;
