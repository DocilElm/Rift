import FeaturesBase from "../../FeatureBase"

const blockCoords = JSON.parse(FileLib.read("Rift", "data/GlyphLocations.json"))

export default new class GlypgLocations extends FeaturesBase {
    constructor(){
        super()

        this.configName = "GlyphLocationsSetting"
        this.requiredWorld = "West Village"

        this.addEvent(this.configName, register("renderWorld", () => {
            if(!World.isLoaded()) return
        
            Object.keys(blockCoords[0]).forEach(title => {
                const [ x, y, z ] = blockCoords[0][title]
                Tessellator.drawString(title, x+.5, y, z+.5, Renderer.WHITE, false, .05, false)
            })
        }), [], this.requiredWorld)
    }
}