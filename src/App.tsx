import React from 'react';
import logo from './logo.svg';
import ReactiveContainer from './components/templates/ReactiveContainer/ReactiveContainer';
import devices from './data/devices';
import './css/main.scss';

function App() {
  return (
    <div className="App">
      <ReactiveContainer devices={devices} />
    </div>
  );
}

export default App;
