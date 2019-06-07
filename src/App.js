import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header';
import Store from './Containers/Store/Store';
import Contact  from './Components/Contact';
import Experiments from './Components/Experiments'


class App extends Component {

  render() {

    return (

      
        <Router>
          {/* <Switch> */}
          <Header />
            <Route path='/store' component={Store}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/poc' component={Experiments}/>
          {/* </Switch> */}
        </Router>
      


    )

  }
}

export default App;
