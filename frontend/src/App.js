import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chart from './components/Chart';
import CreateTask from './components/CreateTask';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Eggplant</h1>
    </header>
    <div className="App-container">
      <div className="App-chart-area">
        <Button
          variant="fab"
          mini
          color="primary"
          aria-label="add"
          className="App-add-button"
        >
          <AddIcon />
        </Button>
        <Chart />
      </div>
      <div className="App-splitter" />
      <div className="App-detail-area">
        <CreateTask />
      </div>
    </div>
  </div>
);

export default App;
