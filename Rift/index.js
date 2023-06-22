/// <reference types="../CTAutocomplete" />

import Settings from "./config"

//DreadFarm
import "./features/dreadfarm/MushroomTimer"
import "./features/dreadfarm/BerberisESP"
//Mirrorverse
import "./features/mirrorverse/LavaMaze"
import "./features/mirrorverse/Tubulator"

register("command", () => Settings.openGUI()).setName("rift")