import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import { inputStyle, headerStyle } from './styles'

const WorkoutInput = ({ title, hasWarmup = false }) => {
  const textStyle = {
    marginRight: 20,
    width: 80
  }
  return (<div>
    <h2 style={inputStyle}>{title}</h2>
    <div>
      {hasWarmup ?
        <div>
          <h3 style={headerStyle}>WARMUP</h3>
          <TextField style={textStyle} onChange={event => {
            console.log(title, "warmup1")
            console.log("value", event.target.value)
          }}
                     floatingLabelText="Warmup 1"
                     defaultValue={0}/>
          <TextField style={textStyle} floatingLabelText="Warmup 2" defaultValue={0}/>
          <TextField style={textStyle} floatingLabelText="Warmup 3" defaultValue={0}/>
          <TextField style={textStyle} floatingLabelText="Warmup 4" defaultValue={0}/>
        </div>
        : null
      }
      <h3 style={headerStyle}>WORKING SETS</h3>
      <TextField style={textStyle} floatingLabelText="Set 1" defaultValue={0}/>
      <TextField style={textStyle} floatingLabelText="Set 2" defaultValue={0}/>
      <TextField style={textStyle} floatingLabelText="Set 3" defaultValue={0}/>
    </div>
  </div>)
}

WorkoutInput.propTypes = {
  title: PropTypes.string,
  hasWarmup: PropTypes.bool
}

export default WorkoutInput
