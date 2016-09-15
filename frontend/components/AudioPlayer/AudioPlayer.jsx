import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import styles from "./AudioPlayer.scss";

import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import PauseIcon from "material-ui/svg-icons/av/pause";
import Slider from "material-ui/Slider";

export default class AudioPlayer extends Component {
	static propTypes = {
		srcMp3: PropTypes.string,
		srcOgg: PropTypes.string,
		title: PropTypes.string.isRequired
	}
	state = {
		isPlaying: true,
		trackLength: 0,
		volume: 0.7,
		isMute: false,
		progress: 0
	};
	componentDidMount() {
		var audioElement = ReactDOM.findDOMNode(this.refs.audioObject);
		audioElement.volume = this.state.volume;
		//Set track/volume bar resolutions and draw
		//Bind events
		audioElement.addEventListener("progress", this.updateProgress);
		audioElement.addEventListener("timeupdate", this.updateProgress);
		audioElement.addEventListener("ended", this.handleMediaEnd);
		audioElement.play();
	}
	componentWillUnmount() {
		var audioElement = ReactDOM.findDOMNode(this.refs.audioObject);
		audioElement.removeEventListener("progress", this.updateProgress);
		audioElement.removeEventListener("timeupdate", this.updateProgress);
		audioElement.removeEventListener("ended", this.handleMediaEnd);
	}
	playOrPause() {
		const newPlayState = !this.state.isPlaying;
		if (newPlayState) {
			this.refs.audioObject.play();
		}
		else {
			this.refs.audioObject.pause();
		}
		this.setState({isPlaying: !this.state.isPlaying});
	}
	handleProgressChange = (event, value) => {
		const player = this.refs.audioObject;
		const duration = player.duration;
		player.currentTime = duration*value;
		this.setState({progress: value});
	}
	updateProgress = () => {
		const player = this.refs.audioObject;
		const currentTime = player.currentTime;
		const duration = player.duration;
		const progress = currentTime/duration;
		this.setState({progress: progress});
	}
	render() {
		const {title, srcMp3} = this.props;
		return (<div className={styles.player}><div className={styles.playerHost}>
			<audio ref="audioObject">
				<source src={srcMp3} type="audio/mpeg" />
			</audio>
			<div className={styles.titleBar} onTouchTap={::this.playOrPause}>
				<span className={styles.playPause}>
					{this.state.isPlaying? <PauseIcon /> : <PlayIcon />}
				</span>
				<span className="title">{title}</span>
			</div>
			<Slider style={{margin: "10px 10px -30px 10px"}} value={this.state.progress} onChange={this.handleProgressChange} />
		</div></div>);
	}
}
