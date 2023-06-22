//didnt know what to actually call this so i just chose first thing that came to mind
import RenderLib from "../../../RenderLib"
import config from "../../config"
import { inRift } from "../../utils/Utils"

//Gets the particles in the dead bushes and cancels them
//it's better to have them as esp boxes anyways

//Particles: FIREWORKS_SPARK, SPELL_WITCH
let particleBlocks = null

register("spawnParticle", (particle, type, event) => {
    if(!World.isLoaded() || !inRift() || !config.BerberisESPSetting) return
    //Block{type=minecraft:deadbush, x=-25, y=71, z=-176}
    const { x, y, z } = particle.getPos()

    if(
        type.func_179346_b() === "fireworksSpark" &&
        World.getBlockAt(x-1, y, z-1).toString().includes("minecraft:deadbush") &&
        World.getBlockAt(x-1, y-1, z-1).toString().includes("minecraft:farmland") &&
        particle.distanceTo(Player.getPlayer()) <= 10
    ) return particleBlocks = [ x-1, y, z-1 ], cancel(event)
})

register("renderWorld", () => {
    if(!World.isLoaded() || !particleBlocks || !inRift() || !config.BerberisESPSetting) return

    RenderLib.drawEspBox(particleBlocks[0]+.5, particleBlocks[1], particleBlocks[2]+.5, 1, 1, 0, 35, 243, 255, false)
})

register("worldUnload", () => particleBlocks = null)