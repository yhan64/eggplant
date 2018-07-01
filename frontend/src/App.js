import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chart from './components/Chart';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';
import './App.css';

const App = (props) => {
  const ADD_STATE = 0;
  const EDIT_STATE = 1;

  const toggleAdd = () => {
    props.rightPanelState = ADD_STATE;
  };

  const toggleEdit = (val) => {
    props.rightPanelState = EDIT_STATE;
    console.log(props.rightPanelState, val);
  };

  return (
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
            onClick={toggleAdd}
          >
            <AddIcon />
          </Button>
          <Chart onSerieClick={toggleEdit} />
        </div>
        <div className="App-splitter" />
        <div className="App-detail-area">
          {props.rightPanelState === ADD_STATE &&
            <CreateTask />
          }
          {props.rightPanelState === EDIT_STATE &&
            <UpdateTask />
          }
        </div>
      </div>
    </div>
  );
};

App.defaultProps = {
  rightPanelState: 0,
};

export default App;
