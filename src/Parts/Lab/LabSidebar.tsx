import {Box, Button, Flex, Heading, Text, SideNav, BorderBox} from "@primer/components";
import React, { useState } from "react";
import LabSettingsStore from "../../Store/LabSettingsStore";

function LabSidebar() {
    let store = LabSettingsStore.useContainer()
    let [hrefImg, setHrefImg] = useState('#')
    return (
        <Box>
            <Box bg="blue.0" p={3}>
                <Box mb={3}>
                    <Heading fontSize={1} mb={1} as={"h4"} color="gray.7">Лапма</Heading>
                    <select style={{width: '100%'}} value={store.currentElement.code}
                            onChange={(evt) => {
                                console.log(evt.target.value)
                                store.setElementFromString(evt.target.value); }}>
                        <option value={"Hg"}>ртутная</option>
                        <option value={"H"}>водородная</option>
                        <option value={"test"}>тестовая</option>
                    </select>
                </Box>
                <Box mb={3}>
                    <Heading fontSize={1} mb={1} as={"h4"} color="gray.7">Ширина щели</Heading>
                    <Flex>
                        <input style={{width: '100%'}} type="range" min="1" max="10" id="holeWidth"
                               value={store.currentHoleWidth}
                               onChange={(evt) => { store.setCurrentHoleWidth(parseInt(evt.target.value))}}
                        className={"col-6"}/>
                        <Text as={"div"} fontSize={4} ml={3}>{store.currentHoleWidth}</Text>
                    </Flex>

                </Box>
            </Box>
            <Box mt={3} bg="yellow.0" p={3}>
                <BorderBox borderWidth={0} borderBottomWidth={1} borderRadius={0} mb={2} pb={1}>
                    <Heading as="h5" fontSize={1} color="gray.7">Сохранить</Heading>
                </BorderBox>
                <SideNav variant="lightweight" backgroundColor={"transparent"}>
                    <SideNav.Link href="#url">
                        <Text>Показание монохроматора</Text>
                    </SideNav.Link>
                    <SideNav.Link href="#" onClick={(evt) => {
                        let cnv = document.getElementById("combined")?.toDataURL("image/png")
                        setHrefImg(cnv)
                    }} download={"Spectrum.png"}>
                        <Text>Изображение</Text>
                    </SideNav.Link>
                </SideNav>
            </Box>
        </Box>
    )
}

export default LabSidebar
