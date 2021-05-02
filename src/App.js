import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
