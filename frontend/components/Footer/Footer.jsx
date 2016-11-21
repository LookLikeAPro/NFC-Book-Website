import React, {Component} from "react";
import Row from "elemental/lib/components/Row";
import Col from "elemental/lib/components/Col";

export default class Footer extends Component {
	render() {
		return (<Row>
			<Col md="2/12"/>
			<Col md="8/12" style={{background: "#ccc", padding: "10px 10px 30px 10px"}}>
				<img style={{height: "50px", float: "right", marginLeft: "10px"}} src={"https://uwaterloo.ca/profiles/uw_base_profile/themes/uw_core_theme/images/university-of-waterloo-logo.png"} />
				<img style={{height: "46px", float: "right"}} src={"https://uwaterloo.ca/school-of-social-work/sites/ca.school-of-social-work/files/uploads/images/logo.gif"} />
			</Col>
		</Row>);
	}
}
