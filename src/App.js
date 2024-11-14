// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TableManager from './components/TableManager';
import { tablesConfig } from './config/tablesConfig';

const App = () => {
  const [currentConfig, setCurrentConfig] = useState(tablesConfig[0]);

  return (
    <Router>
      <div>
        <nav>
          {tablesConfig.map((config) => (
            <Link
              key={config.path}
              to={config.path}
              onClick={() => setCurrentConfig(config)}
              style={{ margin: '0 10px' }}
            >
              {config.name}
            </Link>
          ))}
        </nav>
        
        <Routes>
          {tablesConfig.map((config) => (
            <Route
              key={config.path}
              path={config.path}
              element={<TableManager key={config.name} config={config} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
