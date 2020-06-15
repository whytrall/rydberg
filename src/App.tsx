import React from 'react';
import './App.css';
import Navigation from "./Parts/Navigation";
import NavigationStore from "./Store/NavigationStore";

import {
    BaseStyles, Flex, BorderBox, Box, Grid
} from '@primer/components'
import Lab from "./Pages/Lab";
import About from "./Pages/About";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LabSettingsStore from "./Store/LabSettingsStore";
import {Provider} from 'react-gstore'

function App() {
    return (
        <Provider containers={[
            {container: NavigationStore},
            {container: LabSettingsStore}
        ]}>
            <BrowserRouter>
                <BaseStyles>
                    <BorderBox mt={3} mb={3} p={4} pt={0} width={1024} bg={"white"} overflowX={"scroll"} mx={"auto"}>
                        <Navigation/>
                        <Switch>
                            <Route exact path="/lab" component={Lab}/>
                            <Route exact path="/" component={About}/>
                        </Switch>
                    </BorderBox>
                </BaseStyles>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
