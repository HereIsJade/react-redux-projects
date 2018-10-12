import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from "../actions";

class PostsShow extends Component{
  componentDidMount(){
    console.log('didMount')
    const {id} = this.props.match.params
    this.props.fetchPost(id)
  }
  render(){
    console.log('render')
    const {post} = this.props
    if(!post){
      return (
        <div>Loading...</div>
      )
    }
    else{
      return (
        <div>
          <h3>Post {post.title}</h3>
        </div>
      )
    }

  }
}

function mapStateToProps({posts}, ownProps){
  console.log('state.posts from mapSTP',posts)
  return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost})(PostsShow)