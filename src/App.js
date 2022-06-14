import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DataProvider, GlobalState } from './GlobalState';
import Pages from './components/pages/Page'



function App() {
  const state = useContext(GlobalState)
  
  return (
    <DataProvider>
      <Router>
        <div className='App'>
          <div className="main">
            <Pages/>
          </div>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
