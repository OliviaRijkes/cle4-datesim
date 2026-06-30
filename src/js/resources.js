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
    StellaExcited: new ImageSource('images/StellaExcited.png'),
    StellaIrritated: new ImageSource('images/StellaIrritated.png'),
    StellaAngry: new ImageSource('images/StellaAngry.png'),
    StellaFlirty: new ImageSource('images/Stella.png'),
    EzraHappy: new ImageSource('images/ezraHappy.png'),
    EmineNeutral: new ImageSource('images/emineNeutral.png'),
    Background: new ImageSource('images/cafe.jpg'),
    Table: new ImageSource('images/Tafel.png'),
    Choice: new ImageSource('images/choicevlakken55%.png'),
    Maintext: new ImageSource('images/textvlakken55%.png'),
    Font: new FontSource('images/Merriweather-VariableFont_opsz,wdth,wght.ttf', 'StandardFont'),

    WillowProfile: new ImageSource('images/willowProfile.png'),
    OnyxProfile: new ImageSource('images/onyxprofile.png'),
    StellaProfile: new ImageSource('images/StellaProfile.png'),
    EzraProfile: new ImageSource('images/ezraprofile.png'),
    EmineProfile: new ImageSource('images/emineProfile.png'),

    


}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export {Resources, ResourceLoader}