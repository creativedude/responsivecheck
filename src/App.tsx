import * as React from 'react'; 
import ReactiveContainer from './components/templates/ReactiveContainer/ReactiveContainer';
import devices from './data/devices';
import './css/main.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <ReactiveContainer devices={devices} />
    </div>
  );
}

export default App;
