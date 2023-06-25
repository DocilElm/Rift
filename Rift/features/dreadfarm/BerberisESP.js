import RenderLib from "../../../RenderLib"
import FeaturesBase from "../../FeatureBase"

export default new class BerberisESP extends FeaturesBase {
    constructor(){
        super()

        this.configName = "BerberisESPSetting"
        this.requiredWorld = "Dreadfarm"

        this.particleBlocks = null

        this.addEvent(this.configName, register("spawnParticle", (particle, type, event) => {
            if(!World.isLoaded()) return

            const { x, y, z } = particle.getPos()
        
            if(
                type.func_179346_b() === "fireworksSpark" &&
                World.getBlockAt(x-1, y, z-1).toString().includes("minecraft:deadbush") &&
                World.getBlockAt(x-1, y-1, z-1).toString().includes("minecraft:farmland") &&
                particle.distanceTo(Player.getPlayer()) <= 10
            ) return this.particleBlocks = [ x-1, y, z-1 ], cancel(event)
        }), [
            register("renderWorld", () => {
                if(!World.isLoaded() || !this.particleBlocks) return
            
                RenderLib.drawEspBox(this.particleBlocks[0]+.5, this.particleBlocks[1], this.particleBlocks[2]+.5, 1, 1, 0, 35, 243, 255, false)
            }),
            
            register("worldUnload", () => this.particleBlocks = null)
        ], this.requiredWorld)
    }
}