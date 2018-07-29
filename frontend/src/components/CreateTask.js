import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { formatDate, CreateUpdateCommon } from './CreateUpdateCommon';

const CreateTask = (props) => {
  const state = {
    content: '',
    dueDate: formatDate(new Date()),
    impact: 5,
    timeNeeded: 1,
  };
  const handleChange = (fieldValues) => {
    Object.keys(state).forEach((k) => {
      state[k] = fieldValues[k];
    });
  };
  const handleSaveNew = () => {
    props.onCreateTask(state);
  };

  return (
    <div>
      <CreateUpdateCommon initValues={state} handleChange={handleChange} />
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
