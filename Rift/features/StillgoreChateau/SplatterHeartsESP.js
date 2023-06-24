import RenderLib from "../../../RenderLib"
import config from "../../config"
import { inRift } from "../../utils/Utils"

let particleBlocks = []

register("spawnParticle", (particle, type, event) => {
    if(!World.isLoaded() || !inRift() || !config.HeartESPSetting) return
    //type.func_179346_b()
    if(type.func_179346_b() !== "heart" || particle.distanceTo(Player.getPlayer()) >= 15) return

    const { x, y, z } = particle.getPos()
    if(World.getBlockAt(x, y-1, z).toString().includes(":air") || particleBlocks.some(e => [x, y, z].toString().includes(e))) return

    particleBlocks.push([x, y, z])
})

//um yeah
register("step", () => {
    if(!World.isLoaded() || !inRift() || !config.HeartESPSetting) return

    particleBlocks = []
}).setFps(1)

register("renderWorld", () => {
    if(!World.isLoaded() || !inRift() || !config.HeartESPSetting) return
    particleBlocks.forEach((block, index) => {
        RenderLib.drawEspBox(block[0]+.5, block[1]+1.5, block[2]+.5, .5, .5, 0, 35, 243, 255, false)
    })
})

register("worldUnload", () => particleBlocks = [])