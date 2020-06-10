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

function App() {
    return (
        <LabSettingsStore.Provider>
        <NavigationStore.Provider>
            <BrowserRouter>
                <BaseStyles>
                    <Flex style={{width: '100vw', height: '100vh'}} justifyContent={"center"} alignItems={"start"}>
                        <BorderBox mt={3} p={4} pt={0} width={1024} height={640}>
                            <Navigation/>
                            <Switch>
                                <Route exact path="/lab" component={Lab}/>
                                <Route exact path="/" component={About}/>
                            </Switch>
                        </BorderBox>
                    </Flex>
                </BaseStyles>
            </BrowserRouter>
        </NavigationStore.Provider>
        </LabSettingsStore.Provider>
    );
}

export default App;
