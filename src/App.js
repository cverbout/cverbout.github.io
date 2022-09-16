import React from 'react'

import {Footer, Blog, Qualifications, Projects, WhoChaseV, Header} from './containers';
import { Skills, CTA, Navbar} from './components';
import './App.css';

const App = () => {
 
  return (
    
    <div className='App'>
        <div className='gradient__bg' id='home'>
          <Navbar />
          <Header />
        </div>
        
        <div className='gradient__bg2'>
        <WhoChaseV />
        </div>
        <div>
        <Skills />
        <Projects />
        
        </div>
        
        <Qualifications />
        <CTA />
        <Blog />
       
        <Footer />
    </div>
    
  )
}

export default App