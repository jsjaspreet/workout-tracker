import React, { Component } from 'react'
import WorkoutTitle from '../../components/WorkoutTitle'
import WorkoutInput from '../../components/WorkoutInput'

class DayFour extends Component {
  render() {
    return (
      <div style={{ margin: 100 }}>
        <WorkoutTitle title="Leg Day"/>
        <WorkoutInput title="Squat" hasWarmup/>
        <WorkoutInput title="Leg Press"/>
        <WorkoutInput title="Calf Raise"/>
        <WorkoutInput title="RDL"/>
      </div>
    )
  }
}

export default DayFour
