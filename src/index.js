import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'


const API_KEY = 'AIzaSyBRsFqJsZo0flLvABBEu3Qv8IibCRj0GvQ'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {videos: []}
	  YTSearch({key: API_KEY, term: 'cat'}, (videos)=>{
		  this.setState({videos})
      console.log(this.state.videos)
	  })
  }
  render(){

	  return (<div>
			  <SearchBar />
			  <VideoDetail video = {this.state.videos[0]} />
        <VideoList videos = {this.state.videos} />
		  </div>
	  )
  }

}

ReactDOM.render(<App/>, document.querySelector('div.container'))

