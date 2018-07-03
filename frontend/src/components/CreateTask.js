import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CreateUpdateCommon from './CreateUpdateCommon';

const CreateTask = (props) => {
  const state = {
    content: '',
    dueDate: '',
    impact: '',
    timeNeeded: '',
  };
  const handleChange = (fieldValues, f) => {
    Object.keys(state).forEach((k) => {
      state[k] = fieldValues[k];
    });
    console.log(fieldValues, state, f);
  };
  const handleSaveNew = () => {
    props.onCreateTask(state);
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

CreateTask.propTypes = {
  onCreateTask: PropTypes.func,
};

export default CreateTask;
