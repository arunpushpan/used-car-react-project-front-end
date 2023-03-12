import './App.css';
import { Route,Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';
import Adminkey from './components/Adminkey';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header><Header/></header>
     <Routes>
        <Route path='' element={<Admin/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='view/:id' element={<View/>}/>
        <Route path='admin' element={<Adminkey/>}/>

      </Routes>
      <footer style={{overflowX:'hidden'}}><Footer/></footer>
    </div>
  );
}

export default App;
