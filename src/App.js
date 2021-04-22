import React from "react";
import { Switch, Route } from "react-router-dom";

import MainContainer from "./components/MainContainer.jsx";

function App() {
    return(
        <div className="fullApp">
            <Switch>
                <Route path="/drum-machine" exact component={MainContainer} />
            </Switch>
        </div>
    );
};

export default App;