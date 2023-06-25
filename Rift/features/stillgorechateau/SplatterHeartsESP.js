import RenderLib from "../../../RenderLib"
import FeaturesBase from "../../FeatureBase"

export default new class SplatterHeartsESP extends FeaturesBase {
    constructor(){
        super()

        this.configName = "HeartESPSetting"
        this.requiredWorld = "Stillgore Chteau"

        this.particleBlocks = []

        this.addEvent(this.configName, register("spawnParticle", (particle, type, event) => {
            if(!World.isLoaded()) return
            if(type.func_179346_b() !== "heart" || particle.distanceTo(Player.getPlayer()) >= 15) return
        
            const { x, y, z } = particle.getPos()
            if(World.getBlockAt(x, y-1, z).toString().includes(":air") || this.particleBlocks.some(e => [x, y, z].toString().includes(e))) return
        
            this.particleBlocks.push([x, y, z])
        }), [
            register("step", () => {
                if(!World.isLoaded()) return
            
                this.particleBlocks = []
            }).setFps(1),
            
            register("renderWorld", () => {
                if(!World.isLoaded()) return
                this.particleBlocks.forEach(block => {
                    RenderLib.drawEspBox(block[0]+.5, block[1]+1.5, block[2]+.5, .5, .5, 0, 35, 243, 255, false)
                })
            }),
            
            register("worldUnload", () => this.particleBlocks = [])
        ], this.requiredWorld)
    }
}