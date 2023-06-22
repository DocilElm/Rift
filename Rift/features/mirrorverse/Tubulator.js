import RenderLib from "../../../RenderLib"
import config from "../../config"
import { inRift } from "../../utils/Utils"

const blockCoords = JSON.parse(FileLib.read("The Rift", "data/Tubulator.json"))

register("renderWorld", () => {
    if(!World.isLoaded() || !inRift() || !config.TubulatorSetting) return
    blockCoords.forEach(block => {
        RenderLib.drawEspBox(block[0]+.5, block[1], block[2]+.5, 1, 1, 1, 1, 1, 1, false)
    })
})