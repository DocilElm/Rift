/// <reference types="../CTAutocomplete" />

import Settings from "./config"

//DreadFarm
import "./features/dreadfarm/MushroomTimer"
import "./features/dreadfarm/BerberisESP"
import "./features/dreadfarm/WoodenButtons"
import "./features/dreadfarm/GlyphLocations"
//Mirrorverse
import "./features/mirrorverse/LavaMaze"
import "./features/mirrorverse/Tubulator"
//Stillgore Chateau
import "./features/stillgorechateau/SplatterHeartsESP"

register("command", () => Settings.openGUI()).setName("rift")