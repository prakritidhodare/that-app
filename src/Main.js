import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Employee from './Employee';
import Navigation from './Navigation';

export default class Main extends Component{
    render(){
        return(
            <div>
            <Navigation/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
    </div>);
    }
}