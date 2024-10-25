import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Notes from './components/Notes';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
