import config from "../../config"
import { inRift } from "../../utils/Utils"

const blockCoords = JSON.parse(FileLib.read("Rift", "data/GlyphLocations.json"))

register("renderWorld", () => {
    if(!World.isLoaded() || !inRift() || !config.GlyphLocationsSetting) return

    Object.keys(blockCoords[0]).forEach(title => {
        const [ x, y, z ] = blockCoords[0][title]
        Tessellator.drawString(title, x+.5, y, z+.5, Renderer.WHITE, false, .05, false)
    })
})