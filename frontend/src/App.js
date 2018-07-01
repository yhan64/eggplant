import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chart from './components/Chart';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';
import './App.css';

const ADD_STATE = 0;
const EDIT_STATE = 1;

const getData = () => [
  { name: 'task 1', x: 0.5, y: 0.9 },
  { name: 'task 2', x: 1.5, y: 1.9 },
  { name: 'task 3', x: 0.9, y: 1.5 },
  { name: 'task 4', x: 1.2, y: 1.4 },
  { name: 'task 5', x: 1.4, y: 1.2 },
  { name: 'task 6', x: 1.2, y: 3.0 },
  { name: 'task 7', x: 1.8, y: 2.1 },
];

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
              <CreateTask />
            }
            {this.state.rightPanelState === EDIT_STATE &&
              <UpdateTask />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
