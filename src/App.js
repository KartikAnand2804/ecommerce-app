import './App.css';
import MainNavbar from './navigation/mainnavbar.js'
import FirstGrid from './body/first_grid.js';
import SlidingCarousel from './slidingcarousel/carousel.js'
import Footer from './footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondGrid from './body/second_grid';
import NewsLetter from './body/newsletter';

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

    <div className="grid2">
      <SecondGrid />
    </div>

    <div className="grid3">
      <NewsLetter/>
    </div>

    <div className="footer">
      <Footer/>
    </div>
  </div>
  );
}

export default App;
