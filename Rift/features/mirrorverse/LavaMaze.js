import RenderLib from "../../../RenderLib"
import FeaturesBase from "../../FeatureBase"

const blockCoords = JSON.parse(FileLib.read("Rift", "data/LavaMaze.json"))

export default new class LavaMaze extends FeaturesBase {
    constructor(){
        super()

        this.configName = "LavaMazeSetting"
        this.requiredWorld = "Mirrorverse"

        this.addEvent(this.configName, register("renderWorld", () => {
            if(!World.isLoaded()) return
            
            blockCoords.forEach(block => {
                RenderLib.drawEspBox(block[0]+.5, 52, block[1]+.5, 1, 1, 1, 1, 1, 1, false)
            })
        }), [], this.requiredWorld)
    }
}