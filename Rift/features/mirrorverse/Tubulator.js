import RenderLib from "../../../RenderLib"
import FeaturesBase from "../../FeatureBase"

const blockCoords = JSON.parse(FileLib.read("Rift", "data/Tubulator.json"))

export default new class Tubulator extends FeaturesBase {
    constructor(){
        super()

        this.configName = "TubulatorSetting"
        this.requiredWorld = "Mirrorverse"

        this.addEvent(this.configName, register("renderWorld", () => {
            if(!World.isLoaded()) return

            blockCoords.forEach(block => {
                RenderLib.drawEspBox(block[0]+.5, block[1], block[2]+.5, 1, 1, 1, 1, 1, 1, false)
            })
        }), [], this.requiredWorld)
    }
}