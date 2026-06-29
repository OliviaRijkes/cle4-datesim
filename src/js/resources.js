import {ImageSource, Sound, Resource, Loader, FontSource} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Character1: new ImageSource('images/character1.jpg'),
    WillowHappy: new ImageSource('images/willowHappy.png'),
    WillowAngry: new ImageSource('images/willowAngry.png'),
    WillowConfused: new ImageSource('images/willowConfused.png'),
    WillowFlustered: new ImageSource('images/willowFlustered.png'),
    WillowNeutral: new ImageSource('images/willowNeutral.png'),
    OnyxHappy: new ImageSource('images/onyxHappy.png'),
    OnyxAnnoyed: new ImageSource('images/onyxAnnoyed.png'),
    OnyxAngry: new ImageSource('images/onyxAngry.png'),
    OnyxAwkward: new ImageSource('images/onyxAwkward.png'),
    OnyxPlayful: new ImageSource('images/onyxPlayful.png'),
    OnyxSad: new ImageSource('images/onyxSad.png'),
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