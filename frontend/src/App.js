import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavbarComp from './components/common/NavbarComp';
import Footer from './components/common/Footer';
import QueueManage from './pages/QueueManage';
import InsertQueue from './pages/InsertQueue';
import Home from './pages/Home';
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavbarComp />

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/queueManage' element={<QueueManage />} />
        <Route path='/insertQueue' element={<InsertQueue />} />
        <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
