import './App.css';
// import Home from './components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
