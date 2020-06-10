import {useState} from "react";
import {createContainer} from "unstated-next";

const LabSettingsStore = () => {
    let [currentElement, setCurrentElement] = useState("Hg")
    let [currentHoleWidth, setCurrentHoleWidth] = useState(5)

    return {currentElement, setCurrentElement, currentHoleWidth, setCurrentHoleWidth}
}

export default createContainer(LabSettingsStore)