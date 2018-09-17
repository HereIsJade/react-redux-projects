import React, {Component} from 'react'

class SearchBar extends Component {
	constructor(props){
		super(props)
		this.state = {term: 'Your search term'}
	}

	onInputChange(e){
		this.setState({term: e.target.value})
		this.props.onSearchTermChange(this.state.term)
	}

	render(){
		return (
			<div className='search-bar'>
				<input
					value = {this.state.term}
					onChange = {(e)=>{this.onInputChange(e)}}
				/>
			</div>
		)
	}
}

export default SearchBar
