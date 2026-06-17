import { Scene } from "excalibur";
import {Dateui} from "../ui/dateui.js";
import {Character} from "../characters/character.js";

export class Datescene extends Scene{
    onInitialize(engine){
        console.log('dateScene')
        this.ui =  new Dateui();
        this.add(this.ui);

        this.dateCharacter = new Character();
        this.add(this.dateCharacter);
    }
}