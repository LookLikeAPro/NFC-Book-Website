import React, {Component, PropTypes} from "react";
import styles from "./BackgroundCarousel.scss";

const path = "/static/assets/blur-backgrounds/";

const images = [
	"apple.jpg",
	"cooking.jpg",
	"lavender.jpg",
	"road.jpg",
	"bananas.jpg",
	"forest.jpg",
	"taiwan.jpg",
	"barley.jpg",
	"tomato.jpg"
];

export default class BackgroundCarousel extends Component {
	static propTypes = {
		children: PropTypes.node
	};
	state = {
		index: Math.floor(Math.random()*images.length)
	}
	// state = {
	// 	index: 0
	// };
	// updatePicture() {
	// 	this.setState({
	// 		index: (this.state.index+1)%images.length
	// 	});
	// }
	render() {
		const {index} = this.state;
		const picture = path+images[index];
		return (<div {...this.props} className={styles.container}>
				{this.props.children}
				<div className={styles.backgroundContainer}>
					<img src={picture} />
				</div>
			</div>);
	}
}
