import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./component/Join";
import Chat from "./component/Chat";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route to="/" exact component={Join} />
        <Route to="/chat" exact component={Chat} />
      </Router>
    </React.Fragment>
  );
};
export default App;
