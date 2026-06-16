import {ImageSource, Sound, Resource, Loader, FontSource} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Character1: new ImageSource('images/character1.jpg'),
    Font: new FontSource('images/Merriweather-VariableFont_opsz,wdth,wght.ttf', 'StandertFont'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }