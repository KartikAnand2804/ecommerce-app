import './App.css';
import Navbar from './navigation/navbar.js'
import MainNavbar from './navigation/mainnavbar.js'
import FirstGrid from './body/first_grid.js';
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

    <div>
      <SlidingCarousel />
    </div>

    <div className='grid'>
      <FirstGrid />
    </div>
  </div>
  );
}

export default App;
