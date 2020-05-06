import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </React.Fragment>
  );
};
export default App;
