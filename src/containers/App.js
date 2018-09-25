import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from '../services/actions'
import CommentList from '../components/CommentList'

/**
 * Main container - App
 */
class App extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
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
    actions: PropTypes.shape({
      fetchComments: PropTypes.func.isRequired
    })
  }

  componentDidMount () {
    this.fetch()
  }

  render () {
    const { items, loading, error } = this.props

    const CommentListWithProps = props => {
      return (
        <CommentList
          comments={items}
          loading={loading}
          error={error}
          onUpdate={() => this.fetch()}
          {...props}
        />
      )
    }

    return (
      <Switch>
        <Route exact path='/' component={CommentListWithProps}/>
        <Route path='/:id' component={CommentListWithProps}/>
      </Switch>
    )
  }

  fetch () {
    const { loading, actions } = this.props

    if (loading) {
      return
    }

    return actions.fetchComments()
  }
}

const mapStateToProps = ({items, loading, error}) => ({items, loading, error})
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
