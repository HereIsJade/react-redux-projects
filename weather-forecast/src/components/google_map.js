import React, {Component} from 'react'

export default class GoogleMap extends Component{
	constructor(props) {
		super(props);
		this.mapRef = React.createRef();
	}

	componentDidMount(){
		new google.maps.Map(this.mapRef.current, {
			center: {lat: this.props.lat, lng: this.props.lon},
			zoom: 12
		});
	}

	render(){
		return (
			<div ref={this.mapRef} />
		)
	}
}