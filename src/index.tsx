import * as React from "react";
import { render } from "react-dom";

import "./assets/styles/main.scss";
import App from "./components/App";
import { connect } from "./actions/socket";

connect().then(() => render(
	<App />,
	document.getElementById('root'),
));
