import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteList />
    </div>
  );
}

export default App;