import React from "react";
import {Paper, List, ListItem} from "material-ui";
import {Link} from "react-router";

require('./style');

module.exports = React.createClass({
	render: function() {
		return <div className='aboutPage pageContent'>
			<h1>About</h1>
			<p>The NFC SmartBook Project is a pilot project at Renison University College incorporates NFC technology with ebooks to create a mobile e-library browsing experience.</p>
			<p>By attaching a NFC card to a library book, one can tap the book with a NFC enabled device to conveniently browse online resources related to the book. In the case of Deborah Dejong's book <Link to={`/book/dance`}>D.A.N.C.E.: five steps to Living Your Best Life</Link>, the mobile friendly site provides information about the book, digital reading options, and exclusive interviews with fans.</p>
			<h3>Results</h3>
			<p>The project has received mention on the book <a href="http://www.amazon.ca/Near-Field-Communication-Developments-Implications/dp/1627054324/ref=sr_1_2?ie=UTF8&qid=1420646410&sr=8-2&keywords=Near+Field%3A+recent+development">Near Field Communication: Recent Developments and Library Implications</a>.</p>
			<h3>Contributors</h3>
			<List>
				<ListItem><b>Project Director:</b> Tony Tin</ListItem>
				<ListItem><b>Project Lead:</b> Jerry Zhou</ListItem>
				<ListItem><b>Author:</b> Deborah Dejong</ListItem>
			</List>
			<List subheader="Pilot Members">
				<ListItem primaryText="Carrie Wang" />
				<ListItem primaryText="Han Wang" />
				<ListItem primaryText="Vivi Ma" />
				<ListItem primaryText="Linda Yan" />
			</List>
			<p>Deborah Dejong inspires everyone whose life she touches. She invites the reader to live their best life everyday! Dejong demonstrates through her five step model, that happiness and peace are available to everyone if they choose to DANCE.</p>
			<h3>Contact</h3>
			<List>
				<ListItem primaryText="Email" secondaryText="tony.tin@uwaterloo.ca" />
			</List>
		</div>;
	}
});
