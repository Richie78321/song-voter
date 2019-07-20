import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/layout/Header';
import SubmissionPage from './components/pages/SubmissionPage';
import About from './components/pages/About';
import Footer from './components/layout/Footer';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div id="main" className="App clear-top">
          <Header />
          <div id="dynamic-content" className="container mb-4">
            <Route exact path="/" component={SubmissionPage} />
            <Route path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
