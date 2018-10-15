import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPost, deletePost} from "../actions";

class PostsShow extends Component{
  componentDidMount(){
    if(!this.props.posts){
      console.log('no props.posts')
      const {id} = this.props.match.params
      this.props.fetchPost(id)
    }
  }

  onDeleteClick(){
    const {id} = this.props.match.params
    this.props.deletePost(id,()=>{
      this.props.history.push('/')
    })
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
          <Link to='/'>Back to index</Link>
          <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}
          >
            Delete Post
          </button>
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

export default connect(mapStateToProps, {fetchPost,deletePost})(PostsShow)