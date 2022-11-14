import React from "react";
import { Router } from "@reach/router";
import { LoginPage, DashboardPage } from "pages";

function App() {
  // update document title each page
  // to update every time, when change pathname
	
  return (
    <div className="App">
			<Router>
				<LoginPage path="/" />
				<DashboardPage path="/dashboard" />
			</Router>
    </div>
  );
}

export default App;
