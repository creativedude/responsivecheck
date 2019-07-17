import * as React from 'react'; 
import logo from './logo.svg';
import ReactiveContainer from './components/templates/ReactiveContainer/ReactiveContainer';
import './css/main.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <ReactiveContainer />
    </div>
  );
}

export default App;
