import {UnderlineNav} from "@primer/components"
import React from "react"
import NavigationStore from "../Store/NavigationStore"

function Navigation() {
    let store = NavigationStore.useContainer()
    return (
        <UnderlineNav aria-label="Main" mb={3} style={{position: "sticky"}}>
            <UnderlineNav.Link href="/" selected={store.currentPage === 0}>Информация</UnderlineNav.Link>
            <UnderlineNav.Link href="/lab" selected={store.currentPage === 1}>Лабораторная работа</UnderlineNav.Link>
        </UnderlineNav>
    )
}

export default Navigation;