import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const formatDate = (d) => {
  const y = d.getFullYear();
  const m = `0${d.getMonth() + 1}`.slice(-2);
  const dd = `0${d.getDate()}`.slice(-2);
  return `${y}-${m}-${dd}`;
};

class CreateUpdateCommon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dueDate: formatDate(new Date()),
      impact: 5,
      timeNeeded: 1,
    };
  }

  onChange(obj) {
    this.setState(obj);
    this.props.handleChange(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            id="content"
            label="Content"
            fullWidth
            margin="normal"
            value={this.state.content}
            onChange={event => this.onChange({ content: event.target.value })}
          />
        </div>
        <div>
          <TextField
            id="dueDate"
            label="Due Date (mm/dd/yyyy)"
            fullWidth
            margin="normal"
            type="date"
            inputProps={{ min: formatDate(new Date()) }}
            value={this.state.dueDate}
            onChange={event => this.onChange({ dueDate: event.target.value })}
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
            value={this.state.impact}
            onChange={event => this.onChange({ impact: event.target.value })}
          />
          <TextField
            id="timeNeeded"
            label="Time Needed (days)"
            className="App-input-halfwidth-right"
            margin="normal"
            type="number"
            inputProps={{ min: '0' }}
            value={this.state.timeNeeded}
            onChange={event => this.onChange({ timeNeeded: event.target.value })}
          />
        </div>
      </div>
    );
  }
}

CreateUpdateCommon.propTypes = {
  handleChange: PropTypes.func,
};

export default CreateUpdateCommon;
