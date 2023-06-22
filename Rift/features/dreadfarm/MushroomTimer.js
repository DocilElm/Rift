import config from "../../config"
import { inRift } from "../../utils/Utils"

let lookingTicks = 5
let lookingAtCoords = null

register("step", () => {
    if(!World.isLoaded() || !inRift() || !config.MushroomTimeSetting) return

    const lookingAt = Player.lookingAt()
    if(!lookingAt.type) return

    //Block{type=minecraft:brown_mushroom, x=-78, y=71, z=-135}
    if(lookingAt.type.getRegistryName() !== "minecraft:brown_mushroom") return lookingTicks = 5, lookingAtCoords = null
    lookingAtCoords = [lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()]
    lookingTicks--
    if(lookingTicks < 0) return lookingTicks = 0
}).setFps(1)

register("renderWorld", () => {
    if(!World.isLoaded() || !lookingAtCoords || !inRift() || !config.MushroomTimeSetting) return
    
    Tessellator.drawString(lookingTicks, lookingAtCoords[0]+.500, lookingAtCoords[1], lookingAtCoords[2]+.500, Renderer.WHITE, false, .05, false)
})

register("worldUnload", () => lookingAtCoords = null, lookingTicks = 5)