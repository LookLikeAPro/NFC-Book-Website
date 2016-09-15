import React, {Component} from "react";
import {Link} from "react-router";

export default class WelcomePage extends Component {
	render() {
		return (<div>
			<div className="large-section row vertical-center" style={{height: "100%"}}>
					<div className="col-md-1" />
					<div className="col-md-5">
						<p className="slogan-large">Fresh foods</p>
						<p>Solanum connects you with local farms. Get cheap and local foods you can trust.</p>
					</div>
			</div>
			<div className="large-section row">
				<div className="col-md-6" style={{background: "red"}}>
					<div className="col-md-2" />
					<div className="col-md-9 vertical-center" style={{height: "100%"}}>
						<div>
							<p className="slogan-large">Low Cost</p>
							<p>Listen to your favorite songs, check out new releases, or play music that takes you back.</p>
							<p>Listen to your favorite songs, check out new releases, or play music that takes you back.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6" style={{background: "white", height: "100%"}}>
					<p className="slogan-large">Local foods</p>
					<p>Solanum connects you with local farms. Get the cheap and local foods you can trust.</p>
				</div>
			</div>
			<div className="large-section footer-2">
				<div className="inner row">
					<div className="col-md-4">
						<p>Studios</p>
						<p>Helping more than 200 startups succeed since 1998.</p>
					</div>
					<div className="col-md-8">
						<div className="col-md-4">
							<p>Studios</p>
							<p>Helping more than 200 startups succeed since 1998.</p>
						</div>
						<div className="col-md-4">
							<p>Studios</p>
							<p>Helping more than 200 startups succeed since 1998.</p>
						</div>
						<div className="col-md-4">
							<p>Studios</p>
							<p>Helping more than 200 startups succeed since 1998.</p>
						</div>
					</div>
				</div>
				<div className="divider" />
				<div className="inner row">
					<div className="col-md-3">
						<p>Studios</p>
						<p>Helping more than 200 startups succeed since 1998.</p>
					</div>
					<div className="col-md-3">
						<p>Studios</p>
						<p>Helping more than 200 startups succeed since 1998.</p>
					</div>
					<div className="col-md-3">
						<p>Studios</p>
						<p>Helping more than 200 startups succeed since 1998.</p>
					</div>
					<div className="col-md-3">
						<p>Studios</p>
						<p>Helping more than 200 startups succeed since 1998.</p>
					</div>
				</div>
			</div>
			<div className="large-section footer-3">
				<div className="inner">
					<div className="left">
						<span className="logo">Solanum</span>
						<span className="link"><Link to={"/"}>About</Link></span>
						<span className="link"><Link to={"/"}>Careers</Link></span>
						<span className="link"><Link to={"/"}>News & Events</Link></span>
						<span className="link"><Link to={"/"}>Contact</Link></span>
						<p>© 2015–2015 Solanum.io. All rights reserved.</p>
					</div>
					<div className="right">
						<div>Facebook</div>
						<div>Twitter</div>
						<div>Email</div>
					</div>
				</div>
			</div>
		</div>);
	}
}
