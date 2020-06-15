import {useState} from "react";
import {createContainer} from "unstated-next";
import {ElementHg, ElementH, ElementTest} from "../Lib/Elements/Elements";

const LabSettingsStore = () => {
    let [currentElement, setCurrentElement] = useState(ElementHg)
    let [currentHoleWidth, setCurrentHoleWidth] = useState(8)
    let [currentWaveLen, setCurrentWaveLen] = useState(380)

    const setElementFromString = (name: String) => {
        switch (name) {
            case "H":
                setCurrentElement(ElementH)
                break
            case "Hg":
                setCurrentElement(ElementHg)
                break
            case "test":
                setCurrentElement(ElementTest)
        }
    }

    return {
        currentElement, setCurrentElement, setElementFromString,
        currentHoleWidth, setCurrentHoleWidth,
        currentWaveLen, setCurrentWaveLen
    }
}

export default createContainer(LabSettingsStore)