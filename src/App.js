import './App.css';
import MainNavbar from './navigation/mainnavbar.js'
import FirstGrid from './body/first_grid.js';
import SlidingCarousel from './slidingcarousel/carousel.js'
import Footer from './footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    <div className="mainNavbar">
      <MainNavbar />
    </div>

    <div>
      <SlidingCarousel />
    </div>

    <div className='grid'>
      <FirstGrid />
    </div>

    <div className="footer">
      <Footer/>
    </div>
  </div>
  );
}

export default App;
