import './App.css';
import Navbar from './navbar.js'
import MainNavbar from './mainnavbar.js'
import Footer from './footer.js'

function App() {
  console.log("tatti hogyi h bahut");
  return (
  <div>
    <div className="dealNavbar">
      <Navbar />
    </div>

    <div className="mainNavbar">
      <MainNavbar />
    </div>

    <div>
      <Footer/>
    </div>
  </div>
  );
}

export default App;
