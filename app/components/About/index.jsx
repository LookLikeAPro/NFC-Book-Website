import React from "react";
import {Paper, List, ListItem} from "material-ui";
import {Link} from "react-router";

require('./style');

module.exports = React.createClass({
	render: function() {
		return <div className='aboutPage pageContent'>
			<h1>About</h1>
			<p>The NFC SmartBook Project is a pilot project at Renison College that tries to incorporate NFC technology with library books, in order to create a modern library browsing experience.</p>
			<p>By hiding a NFC card in a library book, one can tap the book with a NFC enabled device to conveiniently browse online resources related to the book. In the case of Deborah Dejong's book <Link to="book" params={{link: "dance"}}>D.A.N.C.E. : five steps to living your best life</Link>, the online repository provides information about the book, digital reading options, and exclusive interviews with fans.</p>
			<h3>Results</h3>
				<p>The project has received mention on the book <a href="http://www.amazon.ca/Near-Field-Communication-Developments-Implications/dp/1627054324/ref=sr_1_2?ie=UTF8&qid=1420646410&sr=8-2&keywords=Near+Field%3A+recent+development">Near Field Communication: Recent Developments and Library Implications</a>.</p>
			<h3>Contributors</h3>
			<List>
				<ListItem primaryText="Director Tony Tin" secondaryText="Project lead" />
				<ListItem primaryText="Deborah Dejong" secondaryText="Pilot project author" />
				<ListItem primaryText="Carrie Wang" secondaryText="Design & editing" />
				<ListItem primaryText="Han Wang" secondaryText="Design & editing" />
				<ListItem primaryText="Jerry Zhou" secondaryText="Website" />
				<ListItem primaryText="Vivi Ma" secondaryText="Design & editing" />
				<ListItem primaryText="s29yan" secondaryText="" />
			</List>
			<h3>Contact</h3>
			<List>
				<ListItem primaryText="Email" secondaryText="tony.tin@uwaterloo.ca" />
			</List>
		</div>;
	}
});
