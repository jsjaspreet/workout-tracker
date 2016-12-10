import React, { PropTypes } from 'react'
import { titleStyle } from './styles'

const WorkoutTitle = ({ title }) => <h1 style={titleStyle}>{title}</h1>

WorkoutTitle.propTypes = {
  title: PropTypes.string
}

export default WorkoutTitle
