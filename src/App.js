import './App.css';
import Navbar from './navbar.js'
import MainNavbar from './mainnavbar.js'
import FirstGrid from './first_grid.js';
import SlidingCarousel from './slidingcarousel/carousel.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    <div className="dealNavbar">
      <Navbar />
    </div>

    <div className="mainNavbar">
      <MainNavbar />
    </div>

    <div className='grid'>
      <FirstGrid />
    </div>

    <div>
      <SlidingCarousel />
    </div>
  </div>
  );
}

export default App;
