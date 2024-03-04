import Navbar from './components/NavbarComponent';
import MenuPage from './pages/MenuPage';
import Create from './pages/CreatePage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MenuDetail from './pages/MenuDetailPage';
import Update from './components/UpdateComponent';
import LandingPage from './pages/LandingPage';
import Footer from './components/FooterComponent';
import PromoList from './components/PromoListComponent';
import UpdateForm from './pages/UpdateForm';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/menulist' element={<MenuPage />} />
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/menus/:id' element={<MenuDetail />} />
            <Route path='/update/:id' element={<UpdateForm/>} />
            <Route path='/promolist' element={<PromoList />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
