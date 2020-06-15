import {Box, Heading} from "@primer/components";
import React from "react";
import NavigationStore from "../Store/NavigationStore";

function About() {
    let store = NavigationStore.useContainer()
    store.setCurrentPage(0)
    return (
        <Box overflow={"scroll"}>
            <Heading fontSize={4} mb={2}>Что это?</Heading>
            <p>Виртуальная установка для лабораторной работы "Изучение спектра атома водорода и определение постоянной Ридберга".</p>
            <Heading fontSize={4} mb={2}>Как пользоваться?</Heading>
            <p>Переключитесь на вкладку "Лабораторная работа."</p>
            <Heading fontSize={3} mb={2}>Правое меню</Heading>
            <p>Выбор типа лампы и толщины щели находится справа.</p>
            <img src={"sidebar1.png"} style={{width: "calc(596px / 2)"}}/>
            <p>Чтобы каждый раз не сохранять значения монохроматора, можно воспользоваться кнопкой в меню справа. Там же можно сохранить спектральную картину.</p>
            <img src={"sidebar2.png"} style={{width: "calc(598px / 2)"}}/>
            <p><i>Примечание: функции сейчас находятся в разработке. Изображение можно сохранить, нажав по нему правой кнопкой мыши и выбрав Сохранить</i></p>
            <Heading fontSize={3} mb={2}>Центральный интерфейс</Heading>
            <p>Чтобы получить значение барабана для той или иной линии, двигайте ползунок. Линия должна оказаться в том месте, как показано на рисунке.</p>
            <img src={"center1.png"} style={{width: "calc(1332px / 2)"}}/>
        </Box>
    );
}

export default About;