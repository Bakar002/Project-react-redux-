import './App.css';
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import CardsDetails  from './Components/CardsDetails';
import Cards from './Components/Cards';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/'element={<Cards/>}/>
      <Route path='/cart'element={<CardsDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
