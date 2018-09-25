import React from 'react'
import PropTypes from 'prop-types'

import Cell from '../Cell'

Table.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number,
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string
    })
  ),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  withLinksToDetailPage: PropTypes.bool.isRequired
}

export default function Table (props) {
  const { comments, loading, error, withLinksToDetailPage } = props

  if (loading) {
    return (
      <div>Loading . . .</div>
    )
  }

  if (error) {
    return (
      <div className='invalid'>{`Error: ${error.message}`}</div>
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <Cell name='id'/>
          <Cell name='postId'/>
          <Cell name='name'/>
          <Cell name='email'/>
          <Cell name='body'/>
        </tr>
      </thead>
      <tbody>
        {comments && comments.map(({ postId, id, name, email, body }) => (
          <tr key={id}>
            <Cell name={id} isLink={withLinksToDetailPage}/>
            <Cell name={postId}/>
            <Cell name={name}/>
            <Cell name={email}/>
            <Cell name={body}/>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
