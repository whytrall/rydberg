declare interface IElement {
    readonly code: string,
    readonly name: string,
    readonly russianName: string,
    readonly rydberg: number,
    readonly z: number
    readonly waveLen: number[]
}

export default IElement