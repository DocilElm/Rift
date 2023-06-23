import renderBeaconBeam from "../../../BeaconBeam"
import config from "../../config"
import { inRift } from "../../utils/Utils"

const blockCoords = JSON.parse(FileLib.read("Rift", "data/WoodenButtons.json"))

//i would put this in the json but i got lazy as shit
const mainButtonsCoords = [[-67, 71, -122],[-86, 71, -129],[-115, 72, -103],[-90, 71, -111],[-83, 70, -85],[-106, 78, -95],[-46, 77, -91],[-42, 74, -85],[-33, 72, -85],[-89, 75, -75]]

register("renderWorld", () => {
    if(!World.isLoaded() || !inRift() || !config.WoodenButtonsSetting) return
    blockCoords.forEach((block, index) => {
        Tessellator.drawString(index+1, block[0]+.5, block[1], block[2]+.5, Renderer.WHITE, false, .05, false)
    })

    mainButtonsCoords.forEach(btnCoord => {
        renderBeaconBeam(btnCoord[0], btnCoord[1], btnCoord[2], 1, 1, 1, 1, true)
    })
})

//You have hit 1/56 of the wooden buttons!
register("chat", () => {
    if(!config.WoodenButtonsSetting) return

    const lookingAt = Player.lookingAt()
    if(!lookingAt.type) return

    const [ x, y, z ] = [lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()]
    let index = null

    //sad
    blockCoords.find((f, i) => {
        if([x, y, z].toString().includes(f))
            return index = i
    })

    if(!index) return
    delete blockCoords[index]

}).setCriteria(/^You have hit ([\d]+)\/56 of the wooden buttons!$/)