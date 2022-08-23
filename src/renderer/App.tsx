import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Hello from './Components/Hello';
import Photo from './Components/Photo';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/photo" element={<Photo />} />
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
