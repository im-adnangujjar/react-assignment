import NavbarSecation from "./commonComponant/navbarSecation/NavbarSecation";
import HeaderSecation from "./pages/home/headerSecation/HeaderSecation";
import FirstSecation from './pages/home/secation1/FirstSecation';
import SecondSecation from './pages/home/secation2/SecondSecation';
import ThridSecation from './pages/home/secation3/ThridSecation';
import FooterSecation from'./commonComponant/footerSecation/FooterSecation'
// import  Button from './commonComponant/button/Button' 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <NavbarSecation />
    <HeaderSecation/>
    <FirstSecation/>
    <SecondSecation/>
    <ThridSecation/>
    <FooterSecation/>
    {/* <Button/> */}
    </div>
  );
}

export default App;
