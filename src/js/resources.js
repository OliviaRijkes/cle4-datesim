import {ImageSource, Sound, Resource, Loader, FontSource} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Character1: new ImageSource('images/character1.jpg'),
    Font: new FontSource('images/Merriweather-VariableFont_opsz,wdth,wght.ttf', 'StandertFont'),
    SelectionScene: new ImageSource('images/achtergrond speler2 selectionscreen.png'),
    Bio0: new ImageSource('images/bio0.png'),
    Bio1: new ImageSource('images/bio1.png'),
    Bio2: new ImageSource('images/bio2.png'),
    Selection0: new ImageSource('images/selection0.png'),

}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }