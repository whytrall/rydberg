import {useState} from "react";
import {createContainer} from "unstated-next";
import {ElementHg, ElementH} from "../Lib/Elements/Elements";

const LabSettingsStore = () => {
    let [currentElement, setCurrentElement] = useState(ElementHg)
    let [currentHoleWidth, setCurrentHoleWidth] = useState(8)

    const setElementFromString = (name: String) => {
        switch (name) {
            case "H":
                setCurrentElement(ElementH)
                break
            case "Hg":
                setCurrentElement(ElementHg)
                break
        }
    }

    return {currentElement, setCurrentElement, currentHoleWidth, setCurrentHoleWidth, setElementFromString}
}

export default createContainer(LabSettingsStore)