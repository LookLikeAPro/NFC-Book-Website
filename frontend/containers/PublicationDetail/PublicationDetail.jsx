import React, {Component, PropTypes} from "react";
import {observer, inject} from "mobx-react";
import Row from "elemental/lib/components/Row";
import Col from "elemental/lib/components/Col";
import CircularProgress from "material-ui/CircularProgress";
import styles from "./PublicationDetail.scss";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import Dialog from "material-ui/Dialog";
import {List, ListItem} from "material-ui/List";

import AudioPlayer from "components/AudioPlayer";

@inject("publicationStore") @observer export default class PublicationDetail extends Component {
	static propTypes = {
		publicationStore: PropTypes.object.isRequired,
		params: PropTypes.object.isRequired
	};
	state = {
		downloadDialogOpen: false,
		playerOpen: false
	};
	componentWillMount() {
		const bookID = this.props.params.id;
		this.props.publicationStore.getModel(bookID);
	}
	openDialog(link) {
		this.setState({downloadDialogOpen: true, link});
	}
	closeDialog() {
		this.setState({downloadDialogOpen: false});
	}
	confirmDownload() {
		window.location = this.state.link;
	}
	mountPlayer(resource) {
		if (this.state.playerResource && resource.id === this.state.playerResource.id) {
			this.setState({
				playerOpen: false,
				playerResource: null
			});
		}
		else {
			this.setState({
				playerOpen: false,
				playerResource: null
			});
			setTimeout(()=> {
				this.setState({
					playerOpen: true,
					playerResource: resource
				});
			}, 500);
		}
	}
	mountVideo(resource) {
		resource.uiPlayerOpen = !resource.uiPlayerOpen;
	}
	render() {
		const bookID = this.props.params.id;
		const publications = this.props.publicationStore.publications;
		const book = publications.has(bookID)? publications.get(bookID) : null;
		const dialogActions = [
			<FlatButton label="Cancel" secondary onTouchTap={::this.closeDialog} />,
			<FlatButton label="Confirm" onTouchTap={::this.confirmDownload} />
		];
		return (<Row>
			<Dialog title="Starting Download" actions={dialogActions} modal={false} open={this.state.downloadDialogOpen} onRequestClose={this.closeDialog}>
				Confirming this dialog will download the file to your device for offline reading.
			</Dialog>
			<Col md="2/12"/>
			<Col md="8/12">
				{this.state.playerOpen? <AudioPlayer title={this.state.playerResource.name} srcMp3={this.state.playerResource.file} />: false}
				{book? <Row style={{margin: "10px 0px"}}>
					<Col md="4/12">
						<img src={book.picture} style={{width: "100%"}} />
					</Col>
					<Col md="8/12"><Paper style={{padding: 10}} zDepth={1}>
						<h3>{book.title}</h3>
						<Divider />
						<h4>{book.author}</h4>
						<p>{book.description}</p>
						{book.resourceGroups.map((group, i) => {
							let items = book.getResourceGroup(group);
							return (<Card key={i} style={{marginBottom: 10}}>
								<CardHeader title={group} actAsExpander showExpandableButton
								/>
								<CardText expandable>
									{(()=>{
										switch (group) {
										case "eBook":
											return items.map((item, i) => {
												return <FlatButton key={i} label={item.displayName} onTouchTap={this.openDialog.bind(this, item.file)} />;
											});
										case "Videos":
											return (<List>{items.map((item, i) => {
												return (<div key={i}>
														<ListItem primaryText={item.name} onTouchTap={this.mountVideo.bind(this, item)} />
														{item.uiPlayerOpen? <video width="100%" controls>
															<source src={item.file} type="video/mp4" />
														</video> : false}
													</div>);
											})}</List>);
										default:
											return (<List>{items.map((item, i) => {
												return <ListItem key={i} primaryText={item.name} onTouchTap={this.mountPlayer.bind(this, item)} />;
											})}</List>);
										}
									})()}
								</CardText>
							</Card>);
						})}
					</Paper>
					</Col>
				</Row> : <div style={{textAlign: "center", width: "100%"}}><CircularProgress /></div>}
			</Col>
		</Row>);
	}
}
