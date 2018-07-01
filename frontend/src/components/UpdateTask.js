import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CreateUpdateCommon from './CreateUpdateCommon';

const container = {
  height: '100%',
  overflow: 'auto',
};

const UpdateTask = (props) => {
  const state = {
    content: 'Finish Eggplant',
    dueDate: new Date().toLocaleDateString(),
    impact: 5,
    timeNeeded: 3,
    timeConsumed: 34,
    status: 'open'
  };
  const handleChange = key => (event) => {
    state[key] = event.target.value;
  };
  const handleSaveNew = () => {
    props.onUpdateTask(state);
  };

  return (
    <div style={container}>
      <CreateUpdateCommon handleChange={handleChange} />
      <div>
        <TextField
          id="content"
          label="Time Consumed"
          fullWidth
          margin="normal"
          value={state.timeConsumed}
          onChange={handleChange('timeConsumed')}
        />
        <TextField
          id="dueDate"
          label="Status"
          fullWidth
          margin="normal"
          value={state.status}
          onChange={handleChange('status')}
        />
      </div>
      <div className="App-save-button-container">
        <Button
          variant="raised"
          onClick={handleSaveNew}
          color="primary"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

UpdateTask.propTypes = {
  onUpdateTask: PropTypes.func,
};

export default UpdateTask;
