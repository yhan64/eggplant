import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chart from './components/Chart';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';
import './App.css';

const ADD_STATE = 0;
const EDIT_STATE = 1;

const rawData = [];

const getUrgency = (dateStr, expectedDays) => {
  const timeDiff = new Date(dateStr) - new Date();
  const em = (expectedDays * 86400000) / timeDiff;
  return Math.floor(em * 10000);
};

const getData = () => rawData.map(t => ({
  name: t.content,
  x: parseFloat(t.impact),
  y: getUrgency(t.dueDate, t.timeNeeded),
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightPanelState: ADD_STATE,
      data: getData(),
    };
  }

  updateData = () => {
    this.setState({
      data: getData()
    });
  };

  createTask = (task) => {
    rawData.push(task);
    this.updateData();
    console.log('Current list', rawData);
  };

  updateTask = (task) => {
    console.log(task);
  };

  toggleAdd = () => {
    this.setState({ rightPanelState: ADD_STATE });
  };

  toggleEdit = (val) => {
    this.setState({ rightPanelState: EDIT_STATE });
    console.log(this.state.rightPanelState, val);
  };

  render() {
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
              onClick={this.toggleAdd}
            >
              <AddIcon />
            </Button>
            <Chart onSerieClick={this.toggleEdit} data={this.state.data} />
          </div>
          <div className="App-splitter" />
          <div className="App-detail-area">
            {this.state.rightPanelState === ADD_STATE &&
              <CreateTask onCreateTask={this.createTask} />
            }
            {this.state.rightPanelState === EDIT_STATE &&
              <UpdateTask onUpdateTask={this.updateTask} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
