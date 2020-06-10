import {useState} from "react";
import {createContainer} from "unstated-next";

const NavigationStore = () => {
    let [currentPage, setCurrentPage] = useState(0)

    return {currentPage, setCurrentPage}
}

export default createContainer(NavigationStore)