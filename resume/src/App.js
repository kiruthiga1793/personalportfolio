import React, { Component } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Education resumeData={resumeData}/>
               <Portfolio resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;