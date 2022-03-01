import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rocket from './components/pages/rocket';
import Mission from './components/pages/mission';
import Profile from './components/pages/profile';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Rocket />} />
            <Route path="missions" element={<Mission />} />
            <Route path="my-profile" element={<Profile />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
