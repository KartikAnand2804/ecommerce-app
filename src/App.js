import './App.css';
import Navbar from './navbar.js'
import MainNavbar from './mainnavbar.js'

function App() {
  return (
  <div>
    <div className="dealNavbar">
      <Navbar />
    </div>

    <div className="mainNavbar">
      <MainNavbar />
    </div>
  </div>
  );
}

export default App;
