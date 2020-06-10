import {Box} from "@primer/components";
import React from "react";
import NavigationStore from "../Store/NavigationStore";

function About() {
    let store = NavigationStore.useContainer()
    store.setCurrentPage(0)
    return (
        <Box>Описание проекта будет здесь</Box>
    );
}

export default About;