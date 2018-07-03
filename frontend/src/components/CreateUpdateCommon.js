import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const formatDate = (d) => {
  const y = d.getFullYear();
  const m = `0${d.getMonth() + 1}`.slice(-2);
  const dd = `0${d.getDate()}`.slice(-2);
  return `${y}-${m}-${dd}`;
};

const CreateUpdateCommon = (props) => {
  const {
    handleChange, state,
  } = props;

  const fieldValues = {};
  const onChange = (key, val) => {
    fieldValues[key] = val;
    handleChange(fieldValues);
  };

  return (
    <div>
      <div>
        <TextField
          id="content"
          label="Content"
          fullWidth
          margin="normal"
          value={fieldValues.content}
          onChange={event => onChange('content', event.target.value)}
        />
      </div>
      <div>
        <TextField
          id="dueDate"
          label="Due Date (mm/dd/yyyy)"
          fullWidth
          margin="normal"
          type="date"
          defaultValue={formatDate(new Date())}
          inputProps={{ min: formatDate(new Date()) }}
          value={fieldValues.dueDate}
          onChange={event => onChange('dueDate', event.target.value)}
        />
      </div>
      <div>
        <TextField
          id="impact"
          label="Impact (1-10)"
          className="App-input-halfwidth-left"
          margin="normal"
          type="number"
          inputProps={{ min: '1', max: '10', step: '1' }}
          defaultValue={5}
          value={fieldValues.impact}
          onChange={event => onChange('impact', event.target.value)}
        />
        <TextField
          id="timeNeeded"
          label="Time Needed (days)"
          className="App-input-halfwidth-right"
          margin="normal"
          type="number"
          inputProps={{ min: '0' }}
          defaultValue={1}
          value={fieldValues.timeNeeded}
          onChange={event => onChange('timeNeeded', event.target.value)}
        />
      </div>
    </div>
  );
};

CreateUpdateCommon.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CreateUpdateCommon;
