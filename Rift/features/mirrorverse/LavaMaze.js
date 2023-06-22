import RenderLib from "../../../RenderLib"
import config from "../../config"
import { inRift } from "../../utils/Utils"

const blockCoords = JSON.parse(FileLib.read("The Rift", "data/LavaMaze.json"))

register("renderWorld", () => {
    if(!World.isLoaded() || !inRift() || !config.LavaMazeSetting) return
    
    blockCoords.forEach(block => {
        RenderLib.drawEspBox(block[0]+.5, 52, block[1]+.5, 1, 1, 1, 1, 1, 1, false)
    })
})