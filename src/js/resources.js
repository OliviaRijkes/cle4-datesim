import {ImageSource, Sound, Resource, Loader, FontSource} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Character1: new ImageSource('images/character1.jpg'),
    WillowHappy: new ImageSource('images/willowHappy.png'),
    WillowAngry: new ImageSource('images/willowAngry.png'),
    WillowConfused: new ImageSource('images/willowConfused.png'),
    WillowFlustered: new ImageSource('images/willowFlustered.png'),
    WillowNeutral: new ImageSource('images/willowNeutral.png'),
    OnyxHappy: new ImageSource('images/onyx.png'),
    OnyxAwkward: new ImageSource('images/onyx.png'),
    OnyxAnnoyed: new ImageSource('images/onyx.png'),
    OnyxAngry: new ImageSource('images/onyx.png'),
    StellaHappy: new ImageSource('images/Stella.png'),
    StellaExcited: new ImageSource('images/Stella.png'),
    StellaIrritated: new ImageSource('images/Stella.png'),
    StellaAngry: new ImageSource('images/Stella.png'),
    StellaFlirty: new ImageSource('images/Stella.png'),
    Font: new FontSource('images/Merriweather-VariableFont_opsz,wdth,wght.ttf', 'StandertFont'),
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export {Resources, ResourceLoader}