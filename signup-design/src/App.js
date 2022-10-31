import React from 'react';
import './App.css';
import data from './data';
import Footer from './Footer';
import SignUpDesign from './SignUpDesign';

function App() {
  return(
    <>
      <SignUpDesign signupDatas={data.signUpData}/>
      <Footer footerDatas={data.footer}/>
    </>
  )
}

export default App;
