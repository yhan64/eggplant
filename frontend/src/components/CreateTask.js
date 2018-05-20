import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CreateTask = () => {
  const state = {
    content: 'Finish Eggplant',
    dueDate: new Date().toLocaleDateString(),
    impact: 5,
    timeNeeded: 3,
  };
  const handleChange = key => (event) => {
    state[key] = event.target.value;
  };

  const handleSaveNew = () => {
    console.log('Save new task', state);
  };

  return (
    <div>
      <div>
        <TextField
          id="content"
          label="Content"
          fullWidth
          margin="normal"
          value={state.content}
          onChange={handleChange('content')}
        />
      </div>
      <div>
        <TextField
          id="dueDate"
          label="Due Date (mm/dd/yyyy)"
          fullWidth
          margin="normal"
          value={state.dueDate}
          onChange={handleChange('dueDate')}
        />
      </div>
      <div>
        <TextField
          id="impact"
          label="Impact (1-9)"
          className="App-input-halfwidth-left"
          margin="normal"
          value={state.impact}
          onChange={handleChange('impact')}
        />
        <TextField
          id="timeNeeded"
          label="Time Needed (days)"
          className="App-input-halfwidth-right"
          margin="normal"
          value={state.timeNeeded}
          onChange={handleChange('timeNeeded')}
        />
      </div>
      <div className="App-save-button-container">
        <Button
          variant="raised"
          onClick={handleSaveNew}
          color="primary"
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default CreateTask;
