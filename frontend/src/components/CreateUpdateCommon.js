import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const CreateUpdateCommon = (props) => {
  const {
    handleChange, content, dueDate, impact, timeNeeded
  } = props;

  return (
    <div>
      <div>
        <TextField
          id="content"
          label="Content"
          fullWidth
          margin="normal"
          value={content}
          onChange={handleChange('content')}
        />
      </div>
      <div>
        <TextField
          id="dueDate"
          label="Due Date (mm/dd/yyyy)"
          fullWidth
          margin="normal"
          value={dueDate}
          onChange={handleChange('dueDate')}
        />
      </div>
      <div>
        <TextField
          id="impact"
          label="Impact (1-9)"
          className="App-input-halfwidth-left"
          margin="normal"
          value={impact}
          onChange={handleChange('impact')}
        />
        <TextField
          id="timeNeeded"
          label="Time Needed (days)"
          className="App-input-halfwidth-right"
          margin="normal"
          value={timeNeeded}
          onChange={handleChange('timeNeeded')}
        />
      </div>
    </div>
  );
};

CreateUpdateCommon.propTypes = {
  handleChange: PropTypes.func.isRequired,
  content: PropTypes.string,
  dueDate: PropTypes.string,
  impact: PropTypes.number,
  timeNeeded: PropTypes.number
};

export default CreateUpdateCommon;
