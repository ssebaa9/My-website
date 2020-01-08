import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/hoc/Layout/Layout';
import Home from './containers/Home/Home';
import CVPage from './containers/CVPage/CVPage';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {

  render() {
    AOS.init();
    return (
      <div className="App">
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/cv" component={CVPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </div>
    );
  }
}

export default App;
