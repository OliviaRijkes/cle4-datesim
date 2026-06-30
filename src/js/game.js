import '../css/style.css'
import {Actor, Engine, Vector, DisplayMode} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {WillowDatescene} from "./scenes/willowDatescene.js";
import {OnyxDatescene} from "./scenes/onyxDatescene.js";
import {StellaDatescene} from "./scenes/stellaDatescene.js";
import {EzraDatescene} from "./scenes/ezraDatescene.js";
import {EmineDatescene} from "./scenes/emineDatescene.js";
import { Selectionscene } from './scenes/selectionscene.js';

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

    startGame() {
        console.log("start de game!")
        //load scenes to switch
        this.addScene("selection", new Selectionscene)

        this.addScene("dateWillow", new WillowDatescene())
        this.addScene("dateOnyx", new OnyxDatescene())
        this.addScene("dateStella", new StellaDatescene())
        this.addScene("dateEzra", new EzraDatescene())
        this.addScene("dateEmine", new EmineDatescene())
        // this.goToScene("dateWillow")
        // this.goToScene("dateOnyx")
        // this.goToScene("dateStella")
        // this.goToScene("dateEzra")
        // this.goToScene("dateEmine")

        this.goToScene("selection")

    }
}

new Game()
