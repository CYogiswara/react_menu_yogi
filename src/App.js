import Navbar from './components/NavbarComponent';
import MenuPage from './pages/MenuPage';
import Create from './pages/CreatePage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MenuDetail from './pages/MenuDetailPage';
import LandingPage from './pages/LandingPage';
import Footer from './components/FooterComponent';
import PromoList from './components/PromoListComponent';
import UpdateForm from './pages/UpdateForm';
import Register from './pages/Register';
import PromoPage from './pages/PromoPage';
import CreatePromoPage from './pages/CreatePromoPage';
import PromoDetail from './pages/PromoDetail';
import Login from './pages/Login';
import Data from './data/db.json';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/landingpage' element={<LandingPage />} />
            <Route path='/menulist' element={<MenuPage />} />
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/menus/:id' element={<MenuDetail />} />
            <Route path='/promos/:id' element={<PromoDetail/>} />
            <Route path='/update/:id' element={<UpdateForm/>} />
            <Route path='/createpromo' element={<CreatePromoPage/>} />
            <Route path='/promolist' element={<PromoList />} />
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login accounts={Data.user}/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
