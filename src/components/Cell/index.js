import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

Cell.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  isLink: PropTypes.bool
}

export default function Cell (props) {
  const { name, isLink } = props

  return (
    <td>
      {
        (isLink)
          ? <Link to={name}>{name}</Link>
          : name
      }
    </td>
  )
}
