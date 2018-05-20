import React from 'react';
import Button from '@material-ui/core/Button';
import CreateUpdateCommon from './CreateUpdateCommon';

const CreateTask = () => {
  const state = {};
  const handleChange = key => (event) => {
    state[key] = event.target.value;
  };
  const handleSaveNew = () => {
    console.log('Save new task', state);
  };

  return (
    <div>
      <CreateUpdateCommon handleChange={handleChange} />
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
