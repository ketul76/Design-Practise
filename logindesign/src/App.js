
import './App.css';
import Footer from './Footer';
import LoginDesign from './LoginDesign';
import data from './data';

function App() {
  return (
    <>
      <LoginDesign loginDesignData = {data.loginDesign}/>
      <Footer footerData = {data.footer}/>
    </>
  );
}

export default App;
