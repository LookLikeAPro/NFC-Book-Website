import React, {Component, PropTypes} from "react";
import {callApi} from "utils/jsonApi";
import {connect, PromiseState} from "react-refetch";
// import {Link} from "react-router";

import MapMarker from "components/MapMarker";
import GoogleMap from "google-map-react";
import CircularProgress from "material-ui/CircularProgress";

import TextField from "material-ui/TextField";
import {List, ListItem} from "material-ui/List";

const defaultLocation = {lng: 0, lat: 0};

class LocationSetter extends Component {
	static propTypes = {
		refreshResults: PropTypes.func.isRequired,
		resultsFetch: PropTypes.object
	}
	state = {
		showMap: true,
		locationFieldValue: ""
	};
	toggleMap(mapOpen) {
		this.setState({
			showMap: mapOpen
		});
	}
	searchSubmit(e) {
		e.preventDefault();
		var searchtext = this.state.locationFieldValue;
		if (searchtext.length > 0) {
			this.props.refreshResults(searchtext);
		}
	}
	handleLocationFieldChange(e) {
		this.setState({locationFieldValue: e.target.value});
	}
	render() {
		const {resultsFetch} = this.props;
		let location;
		if (resultsFetch && resultsFetch.fulfilled) {
			// console.log(resultsFetch.value.results[0].geometry.location);
			location = {lng: resultsFetch.value.results[0].geometry.location.lng, lat: resultsFetch.value.results[0].geometry.location.lat};
		}
		else {
			location = defaultLocation;
		}
		return (<div {...this.props}>
				<div style={{width: "100%", height: "300px"}}>
					<div style={{position: "absolute", zIndex: 100, padding: "0px 10px"}}>
						<form className="ui form" onSubmit={::this.searchSubmit}>
						<TextField onChange={::this.handleLocationFieldChange} ref="searchtext" hintText="Hint Text" />
						<List>
							{(()=>{
								if (resultsFetch) {
									if (resultsFetch.pending || resultsFetch.rejected) {
										return <CircularProgress style={{margin: "auto", display: "block"}} />;
									}
									else if (resultsFetch.fulfilled) {
										return resultsFetch.value.results.slice(0, 3).map((suggestion, index)=>{
											return <ListItem key={index} primaryText={suggestion.name}/>;
										});
									}
								}
								return false;
							})()}
						</List>
						</form>
					</div>
					<GoogleMap defaultCenter={defaultLocation} center={location} defaultZoom={13} >
						<MapMarker lat={location.lat} lng={location.lng} style={{width: "10px", height: "10px", background: "black"}} />
					</GoogleMap>
				</div>
		</div>);
	}
}

export default connect(props => ({
	refreshResults: (searchText) => ({
		resultsFetch: {
			url: `/api/google/location/textsearch?query=${searchText}`,
			force: true,
			refreshing: true
		}
	})
}))(LocationSetter);
