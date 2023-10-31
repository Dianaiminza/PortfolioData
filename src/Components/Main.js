import React from 'react'
import Landingpage from './Landingpage';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import{Switch,Route}from 'react-router-dom';
 const Main = () => {
    return (
        <Switch>
          <Route exact path="/"component={Landingpage}/> 
          <Route  path="/About"component={About}/> 
          <Route  path="/Contact"component={Contact}/>  
          <Route  path="/Projects"component={Projects}/> 
          <Route  path="/Resume"component={Resume}/> 
        
        </Switch>
    )
}
export default Main;