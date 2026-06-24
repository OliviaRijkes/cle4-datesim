import {ImageSource, Sound, Resource, Loader, FontSource} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Character1: new ImageSource('images/character1.jpg'),
    // WillowHappy: new ImageSource('images/willow-happy.png'),
    // WillowAngry: new ImageSource('images/willow-angry.png'),
    // WillowConfused: new ImageSource('images/willow-confused.png'),
    // WillowFlustered: new ImageSource('images/willow-flustered.png'),
    // No actual images of Willow yet -> placeholder images
    WillowHappy: new ImageSource('images/character1.jpg'),
    WillowAngry: new ImageSource('images/character1.jpg'),
    WillowConfused: new ImageSource('images/character1.jpg'),
    WillowFlustered: new ImageSource('images/character1.jpg'),
    OnyxHappy: new ImageSource('images/onyx.png'),
    OnyxAwkward: new ImageSource('images/onyx.png'),
    OnyxAnnoyed: new ImageSource('images/onyx.png'),
    Font: new FontSource('images/Merriweather-VariableFont_opsz,wdth,wght.ttf', 'StandertFont'),
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export {Resources, ResourceLoader}