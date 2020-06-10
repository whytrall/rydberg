import {Box, Button, Heading, Text} from "@primer/components";
import React from "react";
//import LabSettingsStore from "../../Store/LabSettingsStore";

function LabSidebar() {
    //let store = LabSettingsStore.useContainer() onChange={(evt) => { store.setCurrentHoleWidth(parseInt(evt.target.value)); }}
    return (
        <Box>
            <Box bg="blue.0" p={3}>
                <Box mb={3}>
                    <Heading fontSize={1} mb={1} as={"h4"}>Лапма</Heading>
                    <select style={{width: '100%'}}>
                        <option>ртутная</option>
                    </select>
                </Box>
                <Box mb={3}>
                    <Heading fontSize={1} mb={1} as={"h4"}>Ширина щели</Heading>
                    <input style={{width: '100%'}} type="range" min="1" max="100" id="holeWidth"
                           />
                </Box>
                <Box>
                    <Heading fontSize={1} mb={1} as={"h4"}>Показание монохроматора</Heading>
                    <Text as={"div"} fontSize={4}>1337</Text>
                </Box>
            </Box>
            <Box mt={3} bg="yellow.0" p={3}>
                <Heading fontSize={1} mb={1} as={"h4"}>Сохранить</Heading>
                <Button mb={2} variant={"small"}>Показание монохроматора</Button>
                <Button variant={"small"}>Изображение</Button>
            </Box>
        </Box>
    )
}

export default LabSidebar