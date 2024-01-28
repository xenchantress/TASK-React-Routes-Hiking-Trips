import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import TripsList from './TripsList';
import TripDetail from './TripDetail';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trips" element={<TripsList />} />
      <Route path="/details/:tripId" element={<TripDetail />} />
      </Routes>
  );
}

export default App;