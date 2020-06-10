import {Box, Grid} from "@primer/components";
import React from "react";
import NavigationStore from "../Store/NavigationStore";
import LabSidebar from "../Parts/Lab/LabSidebar";

function Lab() {
    let store = NavigationStore.useContainer()
    store.setCurrentPage(1)
    return (
        <Grid gridTemplateColumns="auto 300px" gridGap={3}>
            <Box>1</Box>
            <LabSidebar/>
        </Grid>
    );
}

export default Lab;