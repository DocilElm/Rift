import {
    @Vigilant,
    @SwitchProperty,
    @SelectorProperty,
    @ButtonProperty,
    Color 
} from 'Vigilance';

@Vigilant("Rift", "Settings", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "DreadFarm", "Mirrorverse", "StillgoreChateau"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {
    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "DocilElm was here")
    }

    //stole this from bloom cuz i cba with dumb vigilance
    @ButtonProperty({
        name: "Discord Server",
        description: "Join if you want to report a bug or want to make a suggestion",
        category: "General",
        placeholder: "Join"
    })
    MyDiscord() {
        java.awt.Desktop.getDesktop().browse(new java.net.URI("https://discord.gg/SK9UDzquEN"))
    }

    //DreadFarm
    
    @SwitchProperty({
        name: "Mushroom Timer",
        description: "Renders the amount of time in a count down required to look at the mushroom",
        category: "DreadFarm",
        subcategory: "DreadFarm"
    })
    MushroomTimeSetting = false;

    @SwitchProperty({
        name: "Berberis ESP",
        description: "Renders a box in which dead bush you can farm you need to have firework particles on",
        category: "DreadFarm",
        subcategory: "DreadFarm"
    })
    BerberisESPSetting = false;

    @SwitchProperty({
        name: "Wooden Buttons",
        description: "Renders a box in each direction of the buttons and also adds numbers to each one of them",
        category: "DreadFarm",
        subcategory: "DreadFarm"
    })
    WoodenButtonsSetting = false;

    @SwitchProperty({
        name: "Glyph Locations",
        description: "Renders a text in each of the glyph locations",
        category: "DreadFarm",
        subcategory: "DreadFarm"
    })
    GlyphLocationsSetting = false;

    //Mirrorverse

    @SwitchProperty({
        name: "Lava Maze",
        description: "Renders a box where you can walk to complete this puzzle",
        category: "Mirrorverse",
        subcategory: "Mirrorverse"
    })
    LavaMazeSetting = false;

    @SwitchProperty({
        name: "Tubulator",
        description: "Renders a box where you can jump to complete this puzzle",
        category: "Mirrorverse",
        subcategory: "Mirrorverse"
    })
    TubulatorSetting = false;

    //StillgoreChateau

    @SwitchProperty({
        name: "Heart ESP",
        description: "Renders a box for the hearts particles from Splatters",
        category: "StillgoreChateau",
        subcategory: "StillgoreChateau"
    })
    HeartESPSetting = false;
}

export default new Settings();