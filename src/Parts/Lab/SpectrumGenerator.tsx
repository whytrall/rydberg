import React, {MutableRefObject, useEffect, useRef} from "react";
import {Absolute, BorderBox, Box, Grid, Heading, Relative, Text} from "@primer/components";
import LabSettingsStore from "../../Store/LabSettingsStore";

type SpectrumGeneratorProps = {
    sWidth: number,
    sHeight: number
    lineWidth: number,
    waveLen: number[]
}

function SpectrumGenerator(props: SpectrumGeneratorProps) {
    const waveLenMin = 380
    const waveLenMax = 750

    const values = [
        [0.000000, 380, "#020005"],
        [0.013514, 385, "#020006"],
        [0.027027, 390, "#030008"],
        [0.040541, 395, "#04000A"],
        [0.054054, 400, "#06000D"],
        [0.067568, 405, "#080110"],
        [0.081081, 410, "#0C0117"],
        [0.094595, 415, "#11021F"],
        [0.108108, 420, "#17032A"],
        [0.121622, 425, "#1F053A"],
        [0.135135, 430, "#25084B"],
        [0.148649, 435, "#290A5C"],
        [0.162162, 440, "#2B0E6F"],
        [0.175676, 445, "#291380"],
        [0.189189, 450, "#1F237B"],
        [0.202703, 455, "#132E74"],
        [0.216216, 460, "#09376C"],
        [0.229730, 465, "#0A3E66"],
        [0.243243, 470, "#0C4667"],
        [0.256757, 475, "#0E4F6A"],
        [0.270270, 480, "#10596C"],
        [0.283784, 485, "#11636D"],
        [0.297297, 490, "#146E6F"],
        [0.310811, 495, "#177970"],
        [0.324324, 500, "#178672"],
        [0.337838, 505, "#1A9574"],
        [0.351351, 510, "#1DA375"],
        [0.364865, 515, "#1DB273"],
        [0.378378, 520, "#20C070"],
        [0.391892, 525, "#22CB6B"],
        [0.405405, 530, "#21D662"],
        [0.418919, 535, "#23E054"],
        [0.432432, 540, "#36E842"],
        [0.445946, 545, "#50ED28"],
        [0.459459, 550, "#73EB22"],
        [0.472973, 555, "#8FE722"],
        [0.486486, 560, "#A5E221"],
        [0.500000, 565, "#B9DC22"],
        [0.513514, 570, "#CBD621"],
        [0.527027, 575, "#DCCE20"],
        [0.540541, 580, "#ECC420"],
        [0.554054, 585, "#F2B735"],
        [0.567568, 590, "#F5AB42"],
        [0.581081, 595, "#F69F49"],
        [0.594595, 600, "#F7944B"],
        [0.608108, 605, "#F98848"],
        [0.621622, 610, "#FA7B42"],
        [0.635135, 615, "#FB6C39"],
        [0.648649, 620, "#FD5B2E"],
        [0.662162, 625, "#FC471F"],
        [0.675676, 630, "#F7300F"],
        [0.689189, 635, "#EA220D"],
        [0.702703, 640, "#D42215"],
        [0.716216, 645, "#BF2318"],
        [0.729730, 650, "#A92309"],
        [0.743243, 655, "#981F07"],
        [0.756757, 660, "#871B06"],
        [0.770270, 665, "#771805"],
        [0.783784, 670, "#671504"],
        [0.797297, 675, "#591303"],
        [0.810811, 680, "#4D1103"],
        [0.824324, 685, "#420E02"],
        [0.837838, 690, "#370C01"],
        [0.851351, 695, "#2E0A01"],
        [0.864865, 700, "#270801"],
        [0.878378, 705, "#210600"],
        [0.891892, 710, "#1E0400"],
        [0.905405, 715, "#1A0300"],
        [0.918919, 720, "#170200"],
        [0.932432, 725, "#130100"],
        [0.945946, 730, "#100100"],
        [0.959459, 735, "#0C0100"],
        [0.972973, 740, "#080100"],
        [0.986486, 745, "#060100"],
        [1.000000, 750, "#040100"],
    ]
    const paintRef = useRef<HTMLCanvasElement>(document.createElement("canvas"))
    const linesRef = useRef<HTMLCanvasElement>(document.createElement("canvas"))
    const combinedRef = useRef<HTMLCanvasElement>(document.createElement("canvas"))
    const lookupRef = useRef<HTMLCanvasElement>(document.createElement("canvas"))

    let store = LabSettingsStore.useContainer()

    useEffect(() => {
        const paintCtx = paintRef.current.getContext("2d")
        const linesCtx = linesRef.current.getContext("2d")
        paintRef.current.width = props.sWidth
        paintRef.current.height = props.sHeight
        linesRef.current.width = props.sWidth
        linesRef.current.height = props.sHeight
        combinedRef.current.width = props.sWidth
        combinedRef.current.height = props.sHeight
        lookupRef.current.width = props.sWidth//*2
        lookupRef.current.height = props.sHeight//*2

        if (paintCtx === null || linesCtx === null) return

        let gradient = paintCtx.createLinearGradient(0,0, props.sWidth,0)

        values.forEach(el => {
            gradient.addColorStop(el[0] as number, el[2] as string)
        });

        //paintCtx.filter = "brightness(300%)"
        paintCtx.fillStyle = gradient
        paintCtx.fillRect(0, 0, props.sWidth, props.sHeight)

        linesCtx.fillStyle = "black";
        linesCtx.fillRect(0, 0, props.sWidth, props.sHeight)

        linesCtx.globalCompositeOperation = "destination-out";
        //linesCtx.filter = "blur(0.45px)"

        props.waveLen.forEach(el => {
            linesCtx.fillRect(((el-waveLenMin)/(waveLenMax-waveLenMin)*props.sWidth)-(props.lineWidth/2 | 0), 0,
                props.lineWidth, props.sHeight)
        })

        function copyCanvas(cnv: HTMLCanvasElement, oldArr: HTMLCanvasElement[]) {
            let cnt = cnv.getContext("2d")
            oldArr.forEach(el => {
                if (cnt !== null) {
                    cnt.drawImage(el, 0, 0)
                }
            })
        }

        copyCanvas(combinedRef.current, [paintRef.current, linesRef.current])
        copyCanvas(lookupRef.current, [combinedRef.current])
    })

    function cylinderFn(x: number) {
        let formula = 0.00008673024302563448*Math.pow(x,3)-0.16787118887668839307*Math.pow(x,2)+111.96884263237006962299*x-22743.82333636283874511719
        formula = Math.round(formula)

        if (formula % 2 !== 0) formula += 1

        return formula
    }

    function saveImage() {
        alert("kek")
    }
    return(
        <Box>
            <div className="canvases" hidden>
                <canvas id="paint" ref={paintRef}/>
                <canvas id="lines" ref={linesRef}/>
            </div>

            <BorderBox border={0} borderRadius={1} overflow={"hidden"} height={props.sHeight} mb={3}>
                <canvas id="combined" ref={combinedRef}/>
            </BorderBox>

            <a href={"#"} id={"download"}
               download={"Spectrum.png"} data-currEl={props.waveLen} data-currW={props.lineWidth} hidden>download</a>


            <BorderBox border={1} p={3}>
                <Grid gridTemplateColumns="200px auto" gridGap={3}>
                    <Relative className={"lookupWindow"}
                              mt={3} mx={"auto"}
                              width={props.sHeight/1.5} height={props.sHeight/1.5}>
                        <Relative style={{borderRadius: props.sHeight/1.5}} overflow={"hidden"}
                             width={props.sHeight/1.5} height={props.sHeight/1.5}
                             backgroundColor={"#000"}
                        >
                            <Absolute style={
                                {
                                    left: 100,
                                    marginLeft: -(((store.currentWaveLen-waveLenMin)/(waveLenMax-waveLenMin))*props.sWidth)
                                }
                            }>
                                <canvas id="lookup" ref={lookupRef}/>
                            </Absolute>
                        </Relative>

                        <Absolute className={"arrow"} height={0} width={0}
                                  bottom={0}
                                  left={"calc(50% - 20px)"}
                                  style={{borderColor: "white transparent", borderStyle: "solid", borderWidth: "0 20px 20px 20px"}}>
                        </Absolute>
                    </Relative>
                    <Box>
                        <Box mb={3}>
                            <Heading fontSize={1} mb={1} as={"h4"} textAlign={"center"}>Показание монохроматора</Heading>
                            <Text as={"div"} fontSize={4} textAlign={"center"}>{Math.round(cylinderFn(store.currentWaveLen))}</Text>
                        </Box>
                        <input style={{width: '100%'}} type={"range"} min={waveLenMin} max={waveLenMax} id="waveLen"
                               value={store.currentWaveLen} step={0.1}
                               onChange={(evt) => { store.setCurrentWaveLen(parseFloat(evt.target.value))}}/>
                    </Box>
                </Grid>
            </BorderBox>

        </Box>
    )
}

export default SpectrumGenerator
