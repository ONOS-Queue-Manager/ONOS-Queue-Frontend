import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import NavbarComp from './components/common/NavbarComp';
import Footer from './components/common/Footer';
import QueueManage from './pages/QueueManage';
import InsertQueue from './pages/InsertQueue';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavbarComp />

        <Routes>
        <Route path="/" element={<QueueManage/>} />
        <Route path='/queueManage' element={<InsertQueue />} />
        <Route path='/about' element={<h1>About</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
