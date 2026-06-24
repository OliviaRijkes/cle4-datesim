import '../css/style.css'
import {Actor, Engine, Vector, DisplayMode} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {WillowDatescene} from "./scenes/willowDatescene.js";
import {OnyxDatescene} from "./scenes/onyxDatescene.js";

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    // startGame() {
    //     console.log("start de game!")
    //     //load scenes to switch
    //     this.addScene("date", new Datescene())
    //     this.goToScene("date")
    // }

    startGame() {
        console.log("start de game!")
        //load scenes to switch
        this.addScene("dateWillow", new WillowDatescene())
        this.addScene("dateOnyx", new OnyxDatescene())
        // this.goToScene("dateWillow")
        this.goToScene("dateOnyx")
    }
}

new Game()
