import {Box, Grid} from "@primer/components";
import React from "react";
import NavigationStore from "../Store/NavigationStore";
import LabSidebar from "../Parts/Lab/LabSidebar";
import LabSettingsStore from "../Store/LabSettingsStore";
import SpectrumGenerator from "../Parts/Lab/SpectrumGenerator";

function Lab() {
    let store = NavigationStore.useContainer()
    store.setCurrentPage(1)
    let labStore = LabSettingsStore.useContainer()
    return (
        <Grid gridTemplateColumns="auto 300px" gridGap={3}>
                <Box>
                    <SpectrumGenerator sWidth={658} sHeight={300}
                                       waveLen={labStore.currentElement.waveLen} lineWidth={labStore.currentHoleWidth}/>
                </Box>
                <LabSidebar/>

        </Grid>
    );
}

export default Lab;