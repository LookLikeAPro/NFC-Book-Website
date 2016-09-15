// require("react-hot-loader/patch");
import React from "react";
import {render} from "react-dom";
// import {AppContainer as HotEnabler} from "react-hot-loader";
import MainApp from "./mainApp";
import {browserHistory} from "react-router";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

render(<MainApp history={browserHistory}/>, document.getElementById("content"));

// render((<HotEnabler>
// 		<MainApp history={browserHistory}/>
// 	</HotEnabler>),
// 	document.getElementById("content"));

// if (module.hot) {
// 	module.hot.accept("./mainApp", () => {
// 		render((<HotEnabler>
// 			<MainApp history={browserHistory}/>
// 		</HotEnabler>), document.getElementById("content"));
// 	});
// }
