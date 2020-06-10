import IElement from "./IElement";

/*
declare class ElementHg implements IElement{
    readonly code = "Hg"
    readonly name = "Mercury"
    readonly russianName = "Ртуть"
    readonly rydberg = 109677.5834
    readonly z = 0
    readonly wavelen = new Int32Array([
       1,2,3
    ])
}
 */

const ElementHg: IElement = {
    code: "Hg",
    name: "Mercury",
    russianName: "Ртуть",
    rydberg: 109677.5834,
    z: 0,
    wavelen: [1,2]
}

const ElementH: IElement = {
    code: "H",
    name: "Hydrogen",
    russianName: "Водород",
    rydberg: 109677.5834,
    z: 1,
    wavelen: [1,2]
}

export default {ElementH, ElementHg}