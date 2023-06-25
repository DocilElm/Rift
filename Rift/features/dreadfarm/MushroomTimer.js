import FeaturesBase from "../../FeatureBase"

export default new class MushroomTimer extends FeaturesBase {
    constructor(){
        super()

        this.configName = "MushroomTimeSetting"
        this.requiredWorld = "Dreadfarm"

        this.lookingTicks = 5
        this.lookingAtCoords = null

        this.addEvent(this.configName, register("step", () => {
            if(!World.isLoaded()) return
        
            const lookingAt = Player.lookingAt()
            if(!lookingAt.type) return
        
            if(lookingAt.type.getRegistryName() !== "minecraft:brown_mushroom") return this.lookingTicks = 5, this.lookingAtCoords = null
            this.lookingAtCoords = [lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()]
            this.lookingTicks--
            if(this.lookingTicks < 0) return this.lookingTicks = 0
        }).setFps(1), [
            register("renderWorld", () => {
                if(!World.isLoaded() || !this.lookingAtCoords) return
                
                Tessellator.drawString(this.lookingTicks, this.lookingAtCoords[0]+.500, this.lookingAtCoords[1], this.lookingAtCoords[2]+.500, Renderer.WHITE, false, .05, false)
            }),
            
            register("worldUnload", () => this.lookingAtCoords = null, this.lookingTicks = 5)
        ], this.requiredWorld)
    }
}