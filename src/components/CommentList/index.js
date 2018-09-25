import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Table from '../Table'

CommentList.propTypes = {
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
  onUpdate: PropTypes.func.isRequired
}

/**
 * Comment list with buttons (update & back)
 * @param props
 * @returns {*}
 * @constructor
 */
export default function CommentList (props) {
  const { comments, loading, error, onUpdate, match } = props
  const id = match && match.params.id ? match.params.id : null
  const commentList = id ? comments.filter(comment => comment.id === id) : comments

  return (
    <>
      <button type='button' onClick={onUpdate}>Update</button>
      {id && <Link to='/'><button type='button'>Back</button></Link>}
      <Table
        comments={commentList}
        loading={loading}
        error={error}
        withLinksToDetailPage={!id}
      />
    </>
  )
}
